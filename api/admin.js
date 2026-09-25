import { handleApiError, requireAdmin, sendJson } from "./_lib/auth.js";
import {
  appendAudit, getData, newId, readRawData, saveActivities, saveAssignments, savePeople, saveRequests, saveSettings, withMutationLock
} from "./_lib/store.js";

function text(value, max = 250) {
  return String(value || "").trim().slice(0, max);
}

function auditRecord(user, action, targetType, targetId, details = {}) {
  return { id: newId("AUD"), timestamp: new Date().toISOString(), actorEmail: user.email, action, targetType, targetId, details };
}

function addAssignment(assignments, input) {
  let position = input.position;
  if (input.kind === "Student Officer" && position === "President") {
    const presidents = assignments.filter((assignment) =>
      assignment.activityId === input.activityId && assignment.schoolYear === input.schoolYear && assignment.status !== "Archived" &&
      assignment.kind === "Student Officer" && ["President", "Co-President"].includes(assignment.position)
    );
    if (presidents.length) {
      presidents.forEach((assignment) => { assignment.position = "Co-President"; assignment.updatedAt = new Date().toISOString(); });
      position = "Co-President";
    }
  }
  const existing = assignments.find((assignment) =>
    assignment.activityId === input.activityId && assignment.schoolYear === input.schoolYear && assignment.status !== "Archived" && assignment.kind === input.kind &&
    ((input.personId && assignment.personId === input.personId) || (input.displayName && assignment.displayName.toLowerCase() === input.displayName.toLowerCase()))
  );
  if (existing) {
    existing.position = position;
    existing.updatedAt = new Date().toISOString();
    return;
  }
  assignments.push({ id: newId("ASN"), ...input, position, status: "Active", updatedAt: new Date().toISOString() });
}

function applyRequest(raw, request) {
  const payload = request.payload || {};
  const activity = raw.activities.find((item) => item.id === request.activityId);
  switch (request.requestType) {
    case "update_meeting":
      if (!activity) throw Object.assign(new Error("The activity no longer exists."), { statusCode: 409 });
      if (payload.meetingLocation) activity.meetingLocation = payload.meetingLocation;
      if (payload.meetingDay) activity.meetingDay = payload.meetingDay;
      if (payload.meetingTime) activity.meetingTime = payload.meetingTime;
      activity.updatedAt = new Date().toISOString();
      break;
    case "replace_advisor":
      if (!activity) throw Object.assign(new Error("The activity no longer exists."), { statusCode: 409 });
      raw.assignments.filter((assignment) => assignment.activityId === activity.id && assignment.schoolYear === request.schoolYear && assignment.kind === "Advisor" && assignment.status !== "Archived")
        .forEach((assignment) => { assignment.status = "Archived"; assignment.updatedAt = new Date().toISOString(); });
      addAssignment(raw.assignments, { activityId: activity.id, personId: payload.personId, displayName: payload.displayName, kind: "Advisor", position: payload.position || "Advisor", schoolYear: request.schoolYear });
      break;
    case "add_student":
    case "self_position":
      if (!activity) throw Object.assign(new Error("The activity no longer exists."), { statusCode: 409 });
      addAssignment(raw.assignments, { activityId: activity.id, personId: payload.personId, displayName: payload.displayName, kind: "Student Officer", position: payload.position, schoolYear: request.schoolYear });
      break;
    case "remove_person": {
      if (!activity) throw Object.assign(new Error("The activity no longer exists."), { statusCode: 409 });
      const assignment = raw.assignments.find((item) =>
        item.activityId === activity.id && item.schoolYear === request.schoolYear && item.status !== "Archived" &&
        ((payload.personId && item.personId === payload.personId) || (payload.displayName && item.displayName.toLowerCase() === payload.displayName.toLowerCase()))
      );
      if (assignment) { assignment.status = "Archived"; assignment.updatedAt = new Date().toISOString(); }
      break;
    }
    case "add_activity": {
      if (raw.activities.some((item) => item.schoolYear === request.schoolYear && item.status !== "Archived" && item.name.toLowerCase() === payload.name.toLowerCase())) {
        throw Object.assign(new Error("An activity with this name already exists."), { statusCode: 409 });
      }
      raw.activities.push({
        id: newId("ACT"), name: payload.name, category: payload.category, status: "Active",
        meetingLocation: payload.meetingLocation || "", meetingDay: payload.meetingDay || "", meetingTime: payload.meetingTime || "",
        schoolYear: request.schoolYear, updatedAt: new Date().toISOString()
      });
      break;
    }
    case "remove_activity":
      if (!activity) throw Object.assign(new Error("The activity no longer exists."), { statusCode: 409 });
      activity.status = "Archived";
      activity.updatedAt = new Date().toISOString();
      raw.assignments.filter((assignment) => assignment.activityId === activity.id && assignment.status !== "Archived")
        .forEach((assignment) => { assignment.status = "Archived"; assignment.updatedAt = new Date().toISOString(); });
      break;
    default:
      throw Object.assign(new Error("Unsupported request type."), { statusCode: 400 });
  }
}

async function reviewRequest(user, body) {
  const decision = body.decision === "Approved" ? "Approved" : body.decision === "Rejected" ? "Rejected" : "";
  if (!decision) throw Object.assign(new Error("Choose Approved or Rejected."), { statusCode: 400 });
  const raw = await readRawData();
  const request = raw.requests.find((item) => item.id === text(body.requestId, 100));
  if (!request) throw Object.assign(new Error("Request not found."), { statusCode: 404 });
  if (request.status !== "Pending") throw Object.assign(new Error("This request has already been reviewed."), { statusCode: 409 });
  if (decision === "Approved") applyRequest(raw, request);
  request.status = decision;
  request.reviewedBy = user.email;
  request.reviewNote = text(body.note, 1000);
  request.reviewedAt = new Date().toISOString();
  if (decision === "Approved") {
    await saveActivities(raw.activities);
    await saveAssignments(raw.assignments);
  }
  await saveRequests(raw.requests);
  await appendAudit(auditRecord(user, `${decision} request`, "Request", request.id, { requestType: request.requestType, activityId: request.activityId }));
  return request.schoolYear;
}

async function upsertPerson(user, body) {
  const raw = await readRawData();
  const incoming = body.person || {};
  const person = {
    id: text(incoming.id, 100) || newId("P"), name: text(incoming.name, 150), email: text(incoming.email, 200).toLowerCase(),
    type: ["Teacher", "Student", "Admin"].includes(incoming.type) ? incoming.type : "Student", grade: text(incoming.grade, 10),
    active: incoming.active !== false, schoolYear: text(incoming.schoolYear, 20) || raw.settings.ACTIVE_SCHOOL_YEAR, updatedAt: new Date().toISOString()
  };
  if (!/^[^,]+,\s*.+$/.test(person.name) || !person.email.includes("@")) throw Object.assign(new Error("A valid Last Name, First Name and email are required."), { statusCode: 400 });
  const duplicate = raw.people.find((item) => item.email === person.email && item.id !== person.id);
  if (duplicate) throw Object.assign(new Error("That email is already in one of the Students, Teachers, or Admins tabs."), { statusCode: 409 });
  const index = raw.people.findIndex((item) => item.id === person.id);
  if (index >= 0) raw.people[index] = person; else raw.people.push(person);
  await savePeople(raw.people);
  await appendAudit(auditRecord(user, index >= 0 ? "Updated person" : "Added person", "Person", person.id, { type: person.type }));
  return raw.settings.ACTIVE_SCHOOL_YEAR;
}

async function upsertActivity(user, body) {
  const raw = await readRawData();
  const incoming = body.activity || {};
  const activity = {
    id: text(incoming.id, 100) || newId("ACT"), name: text(incoming.name, 150), category: text(incoming.category, 150),
    status: incoming.status === "Archived" ? "Archived" : "Active", meetingLocation: text(incoming.meetingLocation, 100),
    meetingDay: text(incoming.meetingDay, 40), meetingTime: text(incoming.meetingTime, 80),
    schoolYear: text(incoming.schoolYear, 20) || raw.settings.ACTIVE_SCHOOL_YEAR, updatedAt: new Date().toISOString()
  };
  if (!activity.name || !activity.category) throw Object.assign(new Error("Activity name and category are required."), { statusCode: 400 });
  const duplicate = raw.activities.find((item) => item.id !== activity.id && item.schoolYear === activity.schoolYear && item.status !== "Archived" && item.name.toLowerCase() === activity.name.toLowerCase());
  if (duplicate) throw Object.assign(new Error("That activity already exists for this school year."), { statusCode: 409 });
  const index = raw.activities.findIndex((item) => item.id === activity.id);
  if (index >= 0) raw.activities[index] = activity; else raw.activities.push(activity);
  await saveActivities(raw.activities);
  await appendAudit(auditRecord(user, index >= 0 ? "Updated activity" : "Added activity", "Activity", activity.id, { name: activity.name }));
  return activity.schoolYear;
}

async function deleteActivity(user, body) {
  const raw = await readRawData();
  const activityId = text(body.activityId, 100);
  const activity = raw.activities.find((item) => item.id === activityId);
  if (!activity) throw Object.assign(new Error("Activity not found."), { statusCode: 404 });
  raw.activities = raw.activities.filter((item) => item.id !== activityId);
  raw.assignments = raw.assignments.filter((item) => item.activityId !== activityId);
  await saveActivities(raw.activities);
  await saveAssignments(raw.assignments);
  await appendAudit(auditRecord(user, "Deleted activity", "Activity", activityId, { name: activity.name, schoolYear: activity.schoolYear }));
  return activity.schoolYear;
}

async function resetSchoolYear(user, body) {
  const raw = await readRawData();
  const oldYear = raw.settings.ACTIVE_SCHOOL_YEAR;
  const newYear = text(body.newYear, 20);
  if (!oldYear || !/^\d{4}[–-]\d{4}$/.test(newYear)) throw Object.assign(new Error("Enter a valid new school year."), { statusCode: 400 });
  if (raw.activities.some((activity) => activity.schoolYear === newYear)) throw Object.assign(new Error("The new school year already has activity records."), { statusCode: 409 });
  const idMap = new Map();
  raw.activities.filter((activity) => activity.schoolYear === oldYear && activity.status !== "Archived").forEach((activity) => {
    const id = newId("ACT");
    idMap.set(activity.id, id);
    raw.activities.push({ ...activity, id, schoolYear: newYear, updatedAt: new Date().toISOString() });
  });
  raw.assignments.filter((assignment) => assignment.schoolYear === oldYear && assignment.status !== "Archived" && assignment.kind === "Advisor" && idMap.has(assignment.activityId))
    .forEach((assignment) => raw.assignments.push({ ...assignment, id: newId("ASN"), activityId: idMap.get(assignment.activityId), schoolYear: newYear, updatedAt: new Date().toISOString() }));
  raw.requests.filter((request) => request.schoolYear === oldYear && request.status === "Pending").forEach((request) => {
    request.status = "Expired"; request.reviewedBy = user.email; request.reviewNote = "Closed during school-year rollover."; request.reviewedAt = new Date().toISOString();
  });
  raw.settings.ACTIVE_SCHOOL_YEAR = newYear;
  await saveActivities(raw.activities);
  await saveAssignments(raw.assignments);
  await saveRequests(raw.requests);
  await saveSettings(raw.settings);
  await appendAudit(auditRecord(user, "Started new school year", "SchoolYear", newYear, { previousYear: oldYear, retainedAdvisors: true, clearedStudentOfficers: true }));
  return newYear;
}

export default async function handler(request, response) {
  if (request.method !== "POST") return sendJson(response, 405, { error: "Method not allowed." });
  try {
    const user = await requireAdmin(request);
    const body = typeof request.body === "string" ? JSON.parse(request.body) : (request.body || {});
    const year = await withMutationLock(async () => {
      switch (body.action) {
        case "reviewRequest": return reviewRequest(user, body);
        case "upsertPerson": return upsertPerson(user, body);
        case "upsertActivity": return upsertActivity(user, body);
        case "deleteActivity": return deleteActivity(user, body);
        case "resetSchoolYear": return resetSchoolYear(user, body);
        default: throw Object.assign(new Error("Unknown administrator action."), { statusCode: 400 });
      }
    });
    const data = await getData(year);
    sendJson(response, 200, { data });
  } catch (error) {
    handleApiError(response, error);
  }
}

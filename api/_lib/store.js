import crypto from "node:crypto";
import { appendObjects, readTable, writeObjects } from "./sheets.js";

export const SCHEMAS = {
  Activities: ["id", "name", "category", "status", "meeting_location", "meeting_day", "meeting_time", "school_year", "updated_at"],
  Students: ["full_name", "email", "grade", "active", "school_year", "id", "updated_at"],
  Teachers: ["full_name", "email", "active", "school_year", "id", "updated_at"],
  Admins: ["full_name", "email", "active", "school_year", "id", "updated_at"],
  Assignments: ["id", "activity_id", "person_id", "display_name", "person_type", "position", "status", "school_year", "updated_at"],
  Requests: ["id", "requested_by", "requester_name", "requester_role", "request_type", "activity_id", "payload_json", "notes", "school_year", "status", "reviewed_by", "review_note", "created_at", "reviewed_at"],
  Settings: ["key", "value"],
  AuditLog: ["id", "timestamp", "actor_email", "action", "target_type", "target_id", "details_json"]
};

const DEFAULT_STUDENT_POSITIONS = [
  "President", "Vice President", "Secretary", "Service & Collaboration Coordinator", "PRO", "Co-Events Head",
  "IASAS Representative", "Photography Liaison Officer", "Webmaster", "Media Head", "Treasurer", "Others"
];

let mutationQueue = Promise.resolve();

export function withMutationLock(operation) {
  const result = mutationQueue.then(operation, operation);
  mutationQueue = result.catch(() => {});
  return result;
}

export function newId(prefix) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function bool(value) {
  return String(value).toLowerCase() !== "false" && String(value) !== "0";
}

function json(value, fallback = {}) {
  try { return value ? JSON.parse(value) : fallback; } catch { return fallback; }
}

export function activityFromRow(row) {
  return {
    id: row.id, name: row.name, category: row.category, status: row.status || "Active",
    meetingLocation: row.meeting_location || "", meetingDay: row.meeting_day || "", meetingTime: row.meeting_time || "",
    schoolYear: row.school_year, updatedAt: row.updated_at || ""
  };
}

export function activityToRow(activity) {
  return {
    id: activity.id, name: activity.name, category: activity.category, status: activity.status || "Active",
    meeting_location: activity.meetingLocation || "", meeting_day: activity.meetingDay || "", meeting_time: activity.meetingTime || "",
    school_year: activity.schoolYear, updated_at: activity.updatedAt || new Date().toISOString()
  };
}

function fallbackPersonId(row, type) {
  const key = `${type}:${String(row.email || row.full_name || "").trim().toLowerCase()}`;
  const prefix = type === "Admin" ? "ADM" : type === "Teacher" ? "TCH" : "STU";
  return `${prefix}-${crypto.createHash("sha256").update(key).digest("hex").slice(0, 12)}`;
}

export function personFromRow(row, type = row.type || "Student") {
  return {
    id: row.id || fallbackPersonId(row, type), name: row.full_name, email: String(row.email || "").toLowerCase(), type,
    grade: row.grade || "", active: bool(row.active), schoolYear: row.school_year || "", updatedAt: row.updated_at || ""
  };
}

export function personToRow(person) {
  return {
    id: person.id, full_name: person.name, email: String(person.email || "").toLowerCase(), type: person.type,
    grade: person.grade || "", active: person.active === false ? "FALSE" : "TRUE", school_year: person.schoolYear || "",
    updated_at: person.updatedAt || new Date().toISOString()
  };
}

export function assignmentFromRow(row) {
  return {
    id: row.id, activityId: row.activity_id, personId: row.person_id || "", displayName: row.display_name || "",
    kind: row.person_type, position: row.position, status: row.status || "Active", schoolYear: row.school_year, updatedAt: row.updated_at || ""
  };
}

export function assignmentToRow(assignment) {
  return {
    id: assignment.id, activity_id: assignment.activityId, person_id: assignment.personId || "", display_name: assignment.displayName || "",
    person_type: assignment.kind, position: assignment.position, status: assignment.status || "Active", school_year: assignment.schoolYear,
    updated_at: assignment.updatedAt || new Date().toISOString()
  };
}

export function requestFromRow(row) {
  return {
    id: row.id, requesterEmail: String(row.requested_by || "").toLowerCase(), requesterName: row.requester_name,
    requesterRole: row.requester_role, requestType: row.request_type, activityId: row.activity_id || "",
    payload: json(row.payload_json), notes: row.notes || "", schoolYear: row.school_year, status: row.status || "Pending",
    reviewedBy: row.reviewed_by || "", reviewNote: row.review_note || "", createdAt: row.created_at || "", reviewedAt: row.reviewed_at || ""
  };
}

export function requestToRow(request) {
  return {
    id: request.id, requested_by: String(request.requesterEmail || "").toLowerCase(), requester_name: request.requesterName,
    requester_role: request.requesterRole, request_type: request.requestType, activity_id: request.activityId || "",
    payload_json: JSON.stringify(request.payload || {}), notes: request.notes || "", school_year: request.schoolYear,
    status: request.status || "Pending", reviewed_by: request.reviewedBy || "", review_note: request.reviewNote || "",
    created_at: request.createdAt || new Date().toISOString(), reviewed_at: request.reviewedAt || ""
  };
}

export function auditToRow(audit) {
  return {
    id: audit.id, timestamp: audit.timestamp, actor_email: audit.actorEmail, action: audit.action,
    target_type: audit.targetType, target_id: audit.targetId, details_json: JSON.stringify(audit.details || {})
  };
}

export async function readPeople() {
  const [admins, teachers, students] = await Promise.all([
    readTable("Admins"), readTable("Teachers"), readTable("Students")
  ]);
  const combined = [
    ...admins.rows.map((row) => personFromRow(row, "Admin")),
    ...teachers.rows.map((row) => personFromRow(row, "Teacher")),
    ...students.rows.map((row) => personFromRow(row, "Student"))
  ];
  const emails = new Set();
  return combined.filter((person) => {
    if (!person.email) return true;
    if (emails.has(person.email)) return false;
    emails.add(person.email);
    return true;
  });
}

export async function readRawData() {
  const [activitiesTable, people, assignmentsTable, requestsTable, settingsTable, auditTable] = await Promise.all([
    readTable("Activities"), readPeople(), readTable("Assignments"), readTable("Requests"), readTable("Settings"), readTable("AuditLog")
  ]);
  const settings = Object.fromEntries(settingsTable.rows.map((row) => [row.key, row.value]));
  return {
    activities: activitiesTable.rows.map(activityFromRow),
    people,
    assignments: assignmentsTable.rows.map(assignmentFromRow),
    requests: requestsTable.rows.map(requestFromRow),
    audit: auditTable.rows.map((row) => ({
      id: row.id, timestamp: row.timestamp, actorEmail: row.actor_email, action: row.action,
      targetType: row.target_type, targetId: row.target_id, details: json(row.details_json)
    })),
    settings
  };
}

export async function getData(year = "") {
  const raw = await readRawData();
  const activeYear = raw.settings.ACTIVE_SCHOOL_YEAR || year || raw.activities.map((item) => item.schoolYear).sort().at(-1) || "2026–2027";
  const selectedYear = year || activeYear;
  const years = [...new Set(raw.activities.map((activity) => activity.schoolYear).filter(Boolean))].sort().reverse();
  return {
    activeYear,
    selectedYear,
    years: years.length ? years : [activeYear],
    activities: raw.activities.filter((activity) => activity.schoolYear === selectedYear),
    assignments: raw.assignments.filter((assignment) => assignment.schoolYear === selectedYear),
    people: raw.people.filter((person) => person.active || person.schoolYear === selectedYear),
    requests: raw.requests.filter((request) => request.schoolYear === selectedYear),
    audit: raw.audit.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 100),
    studentPositions: json(raw.settings.STUDENT_POSITIONS_JSON, DEFAULT_STUDENT_POSITIONS)
  };
}

export async function appendRequest(request) {
  await appendObjects("Requests", SCHEMAS.Requests, [requestToRow(request)]);
}

export async function appendAudit(audit) {
  await appendObjects("AuditLog", SCHEMAS.AuditLog, [auditToRow(audit)]);
}

export async function saveActivities(activities) {
  await writeObjects("Activities", SCHEMAS.Activities, activities.map(activityToRow));
}

export async function savePeople(people) {
  await Promise.all([
    writeObjects("Students", SCHEMAS.Students, people.filter((person) => person.type === "Student").map(personToRow)),
    writeObjects("Teachers", SCHEMAS.Teachers, people.filter((person) => person.type === "Teacher").map(personToRow)),
    writeObjects("Admins", SCHEMAS.Admins, people.filter((person) => person.type === "Admin").map(personToRow))
  ]);
}

export async function saveAssignments(assignments) {
  await writeObjects("Assignments", SCHEMAS.Assignments, assignments.map(assignmentToRow));
}

export async function saveRequests(requests) {
  await writeObjects("Requests", SCHEMAS.Requests, requests.map(requestToRow));
}

export async function saveSettings(settings) {
  const rows = Object.entries(settings).map(([key, value]) => ({ key, value }));
  await writeObjects("Settings", SCHEMAS.Settings, rows);
}

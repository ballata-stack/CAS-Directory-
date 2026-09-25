import { handleApiError, requireUser, sendJson } from "./_lib/auth.js";
import { appendRequest, getData, newId, readRawData, withMutationLock } from "./_lib/store.js";

const TEACHER_TYPES = new Set(["update_meeting", "replace_advisor", "add_student", "remove_person", "add_activity", "remove_activity"]);
const STUDENT_TYPES = new Set(["self_position", "update_meeting"]);

function text(value, max = 200) {
  return String(value || "").trim().slice(0, max);
}

function sanitizePayload(type, incoming = {}) {
  const payload = {};
  if (["update_meeting", "add_activity"].includes(type)) {
    payload.meetingLocation = text(incoming.meetingLocation, 100);
    payload.meetingDay = text(incoming.meetingDay, 40);
    payload.meetingTime = text(incoming.meetingTime, 80);
  }
  if (type === "add_activity") {
    payload.name = text(incoming.name, 150);
    payload.category = text(incoming.category, 150);
  }
  if (["replace_advisor", "add_student", "remove_person", "self_position"].includes(type)) {
    payload.personId = text(incoming.personId, 100);
    payload.displayName = text(incoming.displayName, 150);
    payload.position = text(incoming.position, 100);
  }
  return payload;
}

function validationError(type, activityId, payload) {
  if (type !== "add_activity" && !activityId) return "Select an activity.";
  if (type === "add_activity" && (!payload.name || !payload.category)) return "Activity name and category are required.";
  if (["replace_advisor", "add_student", "remove_person", "self_position"].includes(type) && !payload.personId && !payload.displayName) return "Select a person or enter a manual name.";
  if (payload.displayName && !/^[^,]+,\s*.+$/.test(payload.displayName)) return "Manual names must use Last Name, First Name.";
  if (["add_student", "self_position"].includes(type) && !payload.position) return "A student position is required.";
  if (type === "update_meeting" && !payload.meetingLocation && !payload.meetingDay && !payload.meetingTime) return "Enter at least one meeting detail.";
  return "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") return sendJson(response, 405, { error: "Method not allowed." });
  try {
    const user = await requireUser(request);
    const body = typeof request.body === "string" ? JSON.parse(request.body) : (request.body || {});
    const requestType = text(body.requestType, 40);
    const allowed = user.role === "Student" ? STUDENT_TYPES : TEACHER_TYPES;
    if (!allowed.has(requestType) && user.role !== "Admin") throw Object.assign(new Error("This request type is not available for your role."), { statusCode: 403 });
    const activityId = requestType === "add_activity" ? "" : text(body.activityId, 100);
    const payload = sanitizePayload(requestType, body.payload);
    const error = validationError(requestType, activityId, payload);
    if (error) throw Object.assign(new Error(error), { statusCode: 400 });

    const saved = await withMutationLock(async () => {
      const raw = await readRawData();
      const activeYear = raw.settings.ACTIVE_SCHOOL_YEAR || text(body.schoolYear, 20);
      if (!activeYear) throw Object.assign(new Error("The active school year is not configured."), { statusCode: 500 });
      if (requestType !== "add_activity" && !raw.activities.some((activity) => activity.id === activityId && activity.schoolYear === activeYear && activity.status !== "Archived")) {
        throw Object.assign(new Error("The selected activity is not active for the current school year."), { statusCode: 400 });
      }
      if (payload.personId && !raw.people.some((person) => person.id === payload.personId && person.active !== false)) {
        throw Object.assign(new Error("The selected person is not active in the school list."), { statusCode: 400 });
      }
      if (requestType === "self_position") {
        if (!user.personId || payload.personId !== user.personId || payload.displayName) {
          throw Object.assign(new Error("Students may submit only their own position."), { statusCode: 403 });
        }
      }
      const record = {
        id: newId("REQ"), requesterEmail: user.email, requesterName: user.name, requesterRole: user.role,
        requestType, activityId, payload, notes: text(body.notes, 1000), schoolYear: activeYear, status: "Pending",
        reviewedBy: "", reviewNote: "", createdAt: new Date().toISOString(), reviewedAt: ""
      };
      await appendRequest(record);
      return record;
    });
    sendJson(response, 201, { request: saved });
  } catch (error) {
    handleApiError(response, error);
  }
}

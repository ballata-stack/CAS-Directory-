import { handleApiError, requireUser, sendJson } from "./_lib/auth.js";

export default async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) return sendJson(response, 405, { error: "Method not allowed." });
  try {
    const user = await requireUser(request);
    sendJson(response, 200, { user });
  } catch (error) {
    handleApiError(response, error);
  }
}

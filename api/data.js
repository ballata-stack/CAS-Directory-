import { handleApiError, requireUser, sendJson } from "./_lib/auth.js";
import { getData } from "./_lib/store.js";

export default async function handler(request, response) {
  if (request.method !== "GET") return sendJson(response, 405, { error: "Method not allowed." });
  try {
    await requireUser(request);
    const url = new URL(request.url, "https://directory.local");
    const year = String(url.searchParams.get("year") || "").slice(0, 20);
    const data = await getData(year);
    sendJson(response, 200, data);
  } catch (error) {
    handleApiError(response, error);
  }
}

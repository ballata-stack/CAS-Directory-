import { sendJson } from "./_lib/auth.js";

export default async function handler(request, response) {
  const configured = Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID
  );
  const demoMode = process.env.DEMO_MODE === "true" || !configured;
  sendJson(response, 200, {
    demoMode,
    googleClientId: demoMode ? "" : process.env.GOOGLE_CLIENT_ID,
    allowedDomain: process.env.ALLOWED_DOMAIN || "ismanila.org"
  });
}

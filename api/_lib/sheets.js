import crypto from "node:crypto";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
let cachedToken = null;

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function base64Url(value) {
  const input = typeof value === "string" ? Buffer.from(value) : value;
  return input.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;
  const serviceAccountEmail = requiredEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = requiredEnv("GOOGLE_PRIVATE_KEY").replaceAll("\\n", "\n");
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: serviceAccountEmail,
    scope: SHEETS_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  }));
  const unsigned = `${header}.${claims}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = base64Url(signer.sign(privateKey));
  const assertion = `${unsigned}.${signature}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion })
  });
  const payload = await response.json();
  if (!response.ok || !payload.access_token) throw new Error(payload.error_description || "Google Sheets authentication failed.");
  cachedToken = { value: payload.access_token, expiresAt: Date.now() + Number(payload.expires_in || 3600) * 1000 };
  return cachedToken.value;
}

async function sheetsRequest(path, options = {}) {
  const token = await getAccessToken();
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${requiredEnv("GOOGLE_SHEET_ID")}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.error?.message || "Google Sheets request failed.";
    throw new Error(message);
  }
  return payload;
}

function quotedSheet(sheetName) {
  return `'${String(sheetName).replaceAll("'", "''")}'`;
}

export async function readTable(sheetName) {
  const range = `${quotedSheet(sheetName)}!A:Z`;
  const payload = await sheetsRequest(`/values/${encodeURIComponent(range)}?majorDimension=ROWS`);
  const values = payload.values || [];
  if (!values.length) return { headers: [], rows: [] };
  const headers = values[0].map((header) => String(header).trim());
  const rows = values.slice(1).filter((row) => row.some((cell) => String(cell).trim() !== "")).map((row, index) => {
    const object = { _rowNumber: index + 2 };
    headers.forEach((header, column) => { object[header] = row[column] ?? ""; });
    return object;
  });
  return { headers, rows };
}

export async function appendObjects(sheetName, headers, objects) {
  if (!objects.length) return;
  const range = `${quotedSheet(sheetName)}!A:Z`;
  const values = objects.map((object) => headers.map((header) => object[header] ?? ""));
  await sheetsRequest(`/values/${encodeURIComponent(range)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method: "POST",
    body: JSON.stringify({ majorDimension: "ROWS", values })
  });
}

export async function writeObjects(sheetName, headers, objects) {
  const range = `${quotedSheet(sheetName)}!A:Z`;
  await sheetsRequest(`/values/${encodeURIComponent(range)}:clear`, { method: "POST", body: "{}" });
  const values = [headers, ...objects.map((object) => headers.map((header) => object[header] ?? ""))];
  const writeRange = `${quotedSheet(sheetName)}!A1`;
  await sheetsRequest(`/values/${encodeURIComponent(writeRange)}?valueInputOption=RAW`, {
    method: "PUT",
    body: JSON.stringify({ majorDimension: "ROWS", values })
  });
}

export function clearTokenCache() {
  cachedToken = null;
}

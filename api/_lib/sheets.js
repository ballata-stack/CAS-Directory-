import { JWT } from "google-auth-library";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
let jwtClient = null;

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

function normalizePrivateKey(value) {
  let key = String(value || "").trim();
  if (key.startsWith('"') && key.endsWith('"')) {
    try { key = JSON.parse(key); } catch { /* validation below reports a safe error */ }
  }
  return String(key).replaceAll("\\r\\n", "\n").replaceAll("\\n", "\n").trim();
}

export function serviceAccountCredentials(environment = process.env) {
  let email = environment.GOOGLE_SERVICE_ACCOUNT_EMAIL || "";
  let privateKey = environment.GOOGLE_PRIVATE_KEY || "";
  const encodedJson = String(environment.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 || "").replaceAll(/\s/g, "");

  if (encodedJson) {
    let credentials;
    try {
      credentials = JSON.parse(Buffer.from(encodedJson, "base64").toString("utf8"));
    } catch {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 is not a valid Base64-encoded service-account JSON file.");
    }
    email = credentials.client_email || "";
    privateKey = credentials.private_key || "";
  }

  privateKey = normalizePrivateKey(privateKey);
  if (!email) throw new Error("The Google service-account email is missing.");
  if (!privateKey.startsWith("-----BEGIN PRIVATE KEY-----") || !privateKey.endsWith("-----END PRIVATE KEY-----")) {
    throw new Error("The Google service-account private key is malformed. Use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 to avoid formatting issues.");
  }
  return { email, privateKey };
}

async function getAccessToken() {
  if (!jwtClient) {
    const credentials = serviceAccountCredentials();
    jwtClient = new JWT({ email: credentials.email, key: credentials.privateKey, scopes: [SHEETS_SCOPE] });
  }
  const result = await jwtClient.getAccessToken();
  if (!result.token) throw new Error("Google Sheets authentication did not return an access token.");
  return result.token;
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
  jwtClient = null;
}

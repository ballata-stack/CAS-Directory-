import { OAuth2Client } from "google-auth-library";
import { readPeople } from "./store.js";

const tokenCache = new Map();
let googleClient;

function bearerToken(request) {
  const authorization = request.headers.authorization || request.headers.Authorization || "";
  return authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
}

function allowedEmail(email, hostedDomain = "") {
  const configured = (process.env.ALLOWED_DOMAINS || process.env.ALLOWED_DOMAIN || "ismanila.org")
    .split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
  const domain = email.split("@").at(-1)?.toLowerCase() || "";
  return configured.some((allowed) => domain === allowed || domain.endsWith(`.${allowed}`)) &&
    (!hostedDomain || configured.some((allowed) => hostedDomain === allowed || hostedDomain.endsWith(`.${allowed}`)));
}

async function verifyToken(token) {
  const cached = tokenCache.get(token);
  if (cached && cached.expiresAt > Date.now() + 30_000) return cached.claims;
  if (!token) throw Object.assign(new Error("Please sign in with your school Google account."), { statusCode: 401 });
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) throw new Error("GOOGLE_CLIENT_ID is not configured.");

  try {
    googleClient ||= new OAuth2Client(clientId);
    const ticket = await googleClient.verifyIdToken({ idToken: token, audience: clientId });
    const claims = ticket.getPayload();
    if (!claims) throw new Error("Google did not return identity claims.");
    if (claims.email_verified !== true) throw Object.assign(new Error("Your Google email is not verified."), { statusCode: 403 });
    if (!allowedEmail(String(claims.email || "").toLowerCase(), String(claims.hd || "").toLowerCase())) {
      throw Object.assign(new Error("Please use an authorized ISM school account."), { statusCode: 403 });
    }
    const expiresAt = Number(claims.exp || 0) * 1000;
    tokenCache.set(token, { claims, expiresAt });
    return claims;
  } catch (error) {
    if (error.statusCode) throw error;
    throw Object.assign(new Error("Your sign-in has expired or could not be verified. Please sign in again."), { statusCode: 401 });
  }
}

export async function requireUser(request) {
  const claims = await verifyToken(bearerToken(request));
  const email = String(claims.email).toLowerCase();
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",").map((item) => item.trim().toLowerCase()).filter(Boolean);
  const people = await readPeople();
  const person = people.find((candidate) => candidate.email === email && candidate.active !== false);
  if (!person && !adminEmails.includes(email)) {
    throw Object.assign(new Error("Your name is not active in the CAS directory. Please contact a CAS administrator."), { statusCode: 403 });
  }
  const role = adminEmails.includes(email) ? "Admin" : person.type;
  if (!['Admin', 'Teacher', 'Student'].includes(role)) {
    throw Object.assign(new Error("Your directory role is not recognized."), { statusCode: 403 });
  }
  return {
    name: person?.name || claims.name || email,
    email,
    role,
    personId: person?.id || "",
    picture: claims.picture || ""
  };
}

export async function requireAdmin(request) {
  const user = await requireUser(request);
  if (user.role !== "Admin") throw Object.assign(new Error("Administrator access is required."), { statusCode: 403 });
  return user;
}

export function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

export function handleApiError(response, error) {
  console.error(error);
  sendJson(response, error.statusCode || 500, { error: error.statusCode ? error.message : "The directory service is temporarily unavailable." });
}

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = [
  "index.html", "styles.css", "app.js", "favicon.svg", "vercel.json", ".env.example",
  "api/config.js", "api/auth.js", "api/data.js", "api/requests.js", "api/admin.js",
  "api/_lib/auth.js", "api/_lib/store.js", "api/_lib/sheets.js", "scripts/setup-sheet.gs"
];

const failures = [];
for (const filename of required) {
  try { await fs.access(path.join(root, filename)); }
  catch { failures.push(`Missing ${filename}`); }
}

const [html, css, app, setup] = await Promise.all([
  fs.readFile(path.join(root, "index.html"), "utf8"),
  fs.readFile(path.join(root, "styles.css"), "utf8"),
  fs.readFile(path.join(root, "app.js"), "utf8"),
  fs.readFile(path.join(root, "scripts/setup-sheet.gs"), "utf8")
]);

try { new Function(app); } catch (error) { failures.push(`app.js syntax: ${error.message}`); }
for (const id of ["login-screen", "view-directory", "view-activities", "view-submit", "view-how-to", "view-admin", "activity-drawer"]) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing interface section #${id}`);
}
for (const tool of ["search_cas_directory", "open_cas_activity", "start_cas_update_request"]) {
  if (!app.includes(`name: "${tool}"`)) failures.push(`Missing WebMCP tool ${tool}`);
}
for (const asset of ["/styles.css", "/app.js", "/favicon.svg"]) {
  if (!html.includes(asset)) failures.push(`index.html does not reference ${asset}`);
}
for (const peopleTab of ["Students", "Teachers", "Admins"]) {
  if (!setup.includes(`${peopleTab}: [`)) failures.push(`Google Sheet setup is missing the ${peopleTab} tab`);
}
if (setup.includes('People: ["id", "full_name"')) failures.push("Legacy combined People tab is still configured");
const appSeedBlock = app.match(/const ACTIVITY_SEED = \[(.*?)\n\];/s)?.[1] || "";
const setupSeedBlock = setup.match(/const ACTIVITIES = \[(.*?)\n\];/s)?.[1] || "";
const appCount = (appSeedBlock.match(/\{ name: \"/g) || []).length;
const sheetCount = (setupSeedBlock.match(/^\s*\[\".*?\", \".*?\"\],?$/gm) || []).length;
if (appCount !== 125) failures.push(`Expected 125 frontend activities, found ${appCount}`);
if (sheetCount !== 125) failures.push(`Expected 125 setup activities, found ${sheetCount}`);
const openBraces = (css.match(/\{/g) || []).length;
const closeBraces = (css.match(/\}/g) || []).length;
if (openBraces !== closeBraces) failures.push(`CSS brace mismatch: ${openBraces} opening, ${closeBraces} closing`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Checks passed: ${appCount} activities, 3 separate people tabs, teacher/student tutorial, 5 role-aware views, and Google Sheets API routes.`);

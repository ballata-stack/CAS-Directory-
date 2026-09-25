import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8"
};

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/api/config") {
      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
      response.end(JSON.stringify({ demoMode: true, googleClientId: "", allowedDomain: "ismanila.org" }));
      return;
    }
    if (url.pathname.startsWith("/api/")) {
      response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ error: "The local preview uses browser-only demo data." }));
      return;
    }
    const requested = url.pathname === "/" ? "/index.html" : url.pathname;
    const candidate = path.resolve(root, `.${requested}`);
    const safe = candidate.startsWith(root) ? candidate : path.join(root, "index.html");
    let filePath = safe;
    try {
      const info = await fs.stat(filePath);
      if (info.isDirectory()) filePath = path.join(filePath, "index.html");
    } catch {
      filePath = path.join(root, "index.html");
    }
    const body = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error.message);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`ISM CAS Directory preview: http://localhost:${port}`);
});

// Minimal static file server to sanity-check the `out/` static export the
// way a plain Apache host (Hostinger shared hosting) would serve it —
// clean-URL folders with index.html, 404.html fallback for unknown paths.
// Not part of the app; dev/verification only.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "out");
const PORT = process.env.PORT || 4000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(ROOT, urlPath);

    if (urlPath.endsWith("/")) filePath = path.join(filePath, "index.html");

    if (!fs.existsSync(filePath)) {
      if (fs.existsSync(filePath + ".html")) filePath = filePath + ".html";
      else if (fs.existsSync(path.join(filePath, "index.html")))
        filePath = path.join(filePath, "index.html");
      else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        fs.createReadStream(path.join(ROOT, "404.html")).pipe(res);
        return;
      }
    }

    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  })
  .listen(PORT, () => console.log(`Serving out/ at http://localhost:${PORT}`));

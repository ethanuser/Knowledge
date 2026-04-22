import http from "node:http"
import { writeFile } from "node:fs/promises"

const OUTPUT_PATH = "quartz/static/graph-layout.json"
const PORT = 4111

function writeCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "content-type")
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    res.statusCode = 400
    res.end("Bad Request")
    return
  }

  if (req.method === "OPTIONS") {
    writeCorsHeaders(res)
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method === "GET" && req.url === "/") {
    res.setHeader("content-type", "text/html; charset=utf-8")
    res.statusCode = 200
    res.end(`<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Quartz Graph Layout Save API</title></head>
  <body style="font-family: system-ui, sans-serif; margin: 24px;">
    <h2>Quartz Graph Layout Save API is running</h2>
    <p>Use Quartz at <code>http://localhost:8080/?graphEdit=1</code>, open Global Graph, then click <b>Save Layout</b>.</p>
    <p>This server accepts POST requests at <code>/save</code> and writes to <code>quartz/static/graph-layout.json</code>.</p>
  </body>
</html>`)
    return
  }

  if (req.method === "GET" && req.url === "/favicon.ico") {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method === "POST" && req.url === "/save") {
    writeCorsHeaders(res)
    let body = ""
    req.on("data", (chunk) => (body += chunk))
    req.on("end", async () => {
      try {
        const parsed = JSON.parse(body || "{}")
        await writeFile(OUTPUT_PATH, `${JSON.stringify(parsed)}\n`, "utf8")
        res.statusCode = 200
        res.end("ok")
        console.log(`saved ${Object.keys(parsed).length} node positions to ${OUTPUT_PATH}`)
      } catch (err) {
        res.statusCode = 500
        res.end("error")
        console.error(err)
      }
    })
    return
  }

  res.statusCode = 404
  res.end("Not Found")
})

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Graph layout save API running at http://127.0.0.1:${PORT}`)
  console.log("Use Quartz viewer at http://localhost:8080/?graphEdit=1, open Global Graph, drag nodes, click 'Save Layout'.")
  console.log("Keep this process running while editing; Ctrl+C to exit.")
})

process.on("SIGINT", () => {
  server.close(() => process.exit(0))
})

import express from "express"
import fs from "node:fs/promises"
import path from "path"

var isProd = process.env.NODE_ENV === "production", vite
var ssrManifest = isProd ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8") : undefined
var app = express()

if (isProd) {
    app.use((await import("compression")).default())
    app.use((await import("serve-static")).default(path.resolve("dist/client"), {
        index: false
    }))
} else {
    vite = await (await import("vite")).createServer({
        server: { middlewareMode: true },
        appType: "custom"
    })
    app.use(vite.middlewares)
}

app.use("*", async (req, res, next) => {
    var template, render
    
    try {
        if (isProd) {               
            template = await fs.readFile(path.resolve("dist/client/index.html"), "utf-8")
            render = (await import("./dist/server/server.js")).render
        } else {
            template = await fs.readFile(path.resolve("./index.html"), "utf-8")
            template = await vite.transformIndexHtml(req.originalUrl, template)
            render = (await vite.ssrLoadModule("/src/server.tsx")).render
        }

        const appHtml = await render({ path: req.originalUrl }, ssrManifest)
        const html = template.replace(`<!--app-head-->`, `${appHtml.HelmetContext.helmet.title.toString()}${appHtml.HelmetContext.helmet.priority.toString()}${appHtml.HelmetContext.helmet.meta.toString()}${appHtml.HelmetContext.helmet.link.toString()}${appHtml.HelmetContext.helmet.script.toString()}` ?? '')
                             .replace(`<!--app-html-->`, appHtml.html ?? '')
        const httpCode = appHtml.HelmetContext.helmet.title.toString().includes('Page not found') ? 404 : 200
        
        res.status(httpCode).set({"Content-Type": "text/html"}).end(html)
    }
    catch (err) {
        if (!isProd) {
            vite.ssrFixStacktrace(err)
        }
        next(err)
    }
})

const server = app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
})

process.on('SIGTERM', () => {
    server.close(() => console.log('Server terminated'))
})
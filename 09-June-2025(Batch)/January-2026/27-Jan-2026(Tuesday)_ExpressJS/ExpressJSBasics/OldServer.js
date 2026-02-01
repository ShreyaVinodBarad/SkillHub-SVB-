const http = require("http")

const app = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.write("GET Success!")
        res.end()
    } else if (req.method === "POST" && req.url === "/") {
        res.write("POST Success")
        res.end()
    } else {
        res.write("Resource not found!")
        res.end()
    }
})
// 👆 Always runs a call back

app.listen(5000, console.log("Server Running..."))
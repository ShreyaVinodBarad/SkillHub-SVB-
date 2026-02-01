const http = require("http")
// 👆 Imports Node.js’s built-in HTTP module (used to create servers).

// const app = http.createServer()
// 👆 Creates an HTTP server (right now it doesn’t handle requests yet).

/*
const app = http.createServer((req, res) => {
    👆 Creates a server and handles every incoming request.
    console.log(req.method, req.url)
    👆 Logs the HTTP method (GET/POST) and URL of the request.
    res.write("GET Success!")
    👆 Sends response data to the client.
    res.write("Using POSTMAN...")
    👆 Sends more response data.
    res.end()
    👆 Ends the response and sends it to the client.
})
📌 This code logs request details and sends a simple response to the client.
*/

const app = http.createServer((req, res) => {
    const { method, url } = req
    if (method === "GET" && url === "/") {
        res.write("[]")
        res.end()
    } else if (method === "POST" && url === "/todo") {
        res.write("To-Do Create Success!")
        res.end()
    } else {
        res.write("Server Running...")
        res.end()
    }
})

const port = process.argv[2] || 5000

app.listen(port, console.log(`Server Running on the Port ${port} ...`))
// 👆 Starts the server on port 5000 and prints “Server Running…” when it starts successfully.

/*
📌 In short:
1) This code creates a basic Node.js server and runs it on port 5000.
2) When you make changes in the Node.js server file, the server does not auto-restart.
- So you must: Press Ctrl + C → to stop the running server
- Run the file again using node filename.js → to apply the changes
- This happens because Node.js runs the server continuously and doesn’t watch for file changes by default.
3) npm i -g nodemon
- Installs nodemon globally.
- It automatically restarts the server whenever you change the file.
- No need to stop the server again and again with Ctrl + C.
*/
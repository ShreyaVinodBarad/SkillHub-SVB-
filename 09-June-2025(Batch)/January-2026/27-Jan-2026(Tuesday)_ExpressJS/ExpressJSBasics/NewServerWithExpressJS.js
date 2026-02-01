const express = require("express")
// 👆 Imports Express framework.

const app = express()
// 👆 Creates an Express application (server).

app.get("/", (req, res) => {
    // 👆 Handles GET request on / route.
    res.json({ message: "GET Success!", success: true })
    // 👆 Sends JSON response for GET request.
})

app.post("/todo", (req, res) => {
    // 👆 Handles POST request on /todo route.
    res.json({ message: "Create Success!", success: true })
    // 👆 Sends JSON response after creating data.
})

app.patch("/todo/1", (req, res) => {
    // 👆 Handles PATCH request to update todo with id 1.
    res.json({ message: "Update Success!", success: true })
    // 👆 Sends JSON response after update.
})

app.delete("/todo/1", (req, res) => {
    // 👆 Handles DELETE request to delete todo with id 1.
    res.json({ message: "Delete Success!", success: true })
    // 👆 Sends JSON response after delete.
})

app.listen(5000, console.log("Server Running On: http://localhost:5000"))
// 👆 Starts server on port 5000 and logs message.
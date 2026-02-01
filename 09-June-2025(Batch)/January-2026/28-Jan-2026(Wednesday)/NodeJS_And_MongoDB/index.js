const express = require("express")

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/node-mongodb-todo")
/*
👆
Imports mongoose and connects your Node.js app to a MongoDB database named node-mongodb-todo.
*/

const app = express()

app.use(express.json()) // 👉 Body Parser Middleware
// 👆 It reads JSON data from the request body and makes it available in req.body.

app.use("/notes", require("./routes/todo.route.js"))

// app.listen(5000, console.log("Server Running..."))

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!")
    // 👆 Prints a message to confirm MongoDB is connected.
    app.listen(5000, console.log("Server Running..."))
    // 👆 Starts the server on port 5000 and prints "Server Running...".
})
/*
👆 
- Runs the code only once when MongoDB connection is successfully opened.
- In short:
Wait for MongoDB → confirm connection → start server.
*/
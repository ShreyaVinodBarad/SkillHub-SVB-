const express = require("express")

const app = express()

app.use(express.json()) // 👉 Middleware that parses JSON data from frontend and stores it in req.body before routes run.
// 👆 It helps to get all the data from the frontend and store it in req.body, it actually known as middleware means before running the below given code run this first
/*
📌 What is MiddleWare?
- Middleware is a function that runs before the route, processes the request, then passes it forward.
*/

app.use("/auth", require("./routes/auth.routes.js"))

app.listen(5000, console.log("Server Running On: http://localhost:5000"))
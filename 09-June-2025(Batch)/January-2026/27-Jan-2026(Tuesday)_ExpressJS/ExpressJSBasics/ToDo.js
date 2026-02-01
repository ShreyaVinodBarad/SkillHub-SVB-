const express = require("express")

const app = express()

// app.use("/", require("./routes/todo.routes.js"))
/*
👆 
a) app.use()
Uses middleware or routes in Express.
b) "/"
Base path (root route).
c) require("./routes/todo.routes")
Imports the router from todo.routes file.
c) Meaning:
- Whenever a request starts with /, Express will forward it to the router file.
- Whenever there is "/" use router file.
*/
app.use("/todo", require("./routes/todo.routes.js"))

app.listen(5000, console.log("Server is Running on: http://localhost:5000"))
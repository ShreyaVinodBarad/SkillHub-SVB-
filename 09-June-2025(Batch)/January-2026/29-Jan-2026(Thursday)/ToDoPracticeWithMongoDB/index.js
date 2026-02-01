const express = require("express")

const mongoose = require("mongoose")

require("dotenv").config() // 👉 Loads .env file when it is in the same folder as index.js.
// 👆 This is code is the when .env file is near index.js => dotenv.config() is used to make .env variables available in process.env.

// require("dotenv").config({ path: "./" }) 👉 Loads .env file from another folder by giving its path.
// 👆 This code is when the .env file is in another folder we have to pass .env file path as value of path key.

mongoose.connect("mongodb+srv://ShreyaVinodBarad:YGnHd6PtXGOD4jZ9@cluster0.zayylg6.mongodb.net/task-manager")
// 👆 Here, task-manager is the name of the Database.

const app = express()

app.use("/api/todo", require("./routes/todo.routes.js"))
/*
👆
1) app.use() → tells Express to use something (middleware / routes)
2) "/api/todo" → base URL path
3) require("./routes/todo.routes.js") → imports the todo routes file
4) What it means:
- All routes written inside todo.routes.js will start with /api/todo
*/

console.log(process.env.PORT)

app.listen(5000, console.log("App Running..."))
/*
📌 Middleware
- Middleware is a helper that works in between request and response.
- Think like this:
When a request comes to your app
Before it reaches your main code, middleware runs first.

📌 Postman
- Postman is an API testing tool that allows developers to send HTTP requests to backend APIs and verify responses without using a frontend.
- It is used to test, debug, and validate APIs like GET, POST, PUT, DELETE.
*/ 
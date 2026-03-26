const express = require("express")
/*
👆
- Importing Express
- Used to create server and handle routes
*/

const mongoose = require("mongoose")
/*
👆
- Importing Mongoose
- Used to connect and work with MongoDB
*/

require("dotenv").config() // 👉 Loads .env file when it is in the same folder as index.js.
// 👆 This is code is the when .env file is near index.js => dotenv.config() is used to make .env variables available in process.env.
/*
👆
- Loads environment variables from .env file
- Example: PORT, MONGO_URL
*/

// require("dotenv").config({ path: "./" }) 👉 Loads .env file from another folder by giving its path.
// 👆 This code is when the .env file is in another folder we have to pass .env file path as value of path key.

// mongoose.connect("mongodb+srv://ShreyaVinodBarad:YGnHd6PtXGOD4jZ9@cluster0.zayylg6.mongodb.net/task-manager")
// 👆 Here, task-manager is the name of the Database.
mongoose.connect(process.env.MONGO_URL)
/*
👆
- Connecting to MongoDB database
- Uses URL stored in .env
*/

const app = express()
// 👆 Creating Express app (server instance)

app.use(express.json()) //👉 Middleware: It's work is to put data inside req.body known as Body Parser

app.use("/api/todo", require("./routes/todo.routes.js"))
/*
👆
1) app.use() → tells Express to use something (middleware / routes)
2) "/api/todo" → base URL path
3) require("./routes/todo.routes.js") → imports the todo routes file
4) What it means:
- All routes written inside todo.routes.js will start with /api/todo
*/

app.use("/api/auth", require("./routes/auth.routes.js"))
// 👆 For auth

mongoose.connection.once("open", () => {
    // 👆 Runs only once when DB connection is successful
    console.log("DB is Connected Successfully!")
    // 👆 Prints message when DB connects
    app.listen(process.env.PORT, console.log("App Running..."))
    /*
    👆
    Starts server on given PORT
    Prints “App Running...” when server starts
    */
})
// 👆 When my Database is connected, than ON my Server.

// console.log(process.env.PORT) 👉 Gives port number 

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

/*
📌 Simple Flow:
1) Load env variables
2) Connect DB
3) Create server
4) Add middleware
5) Add routes
6) Start server when DB connects
*/ 
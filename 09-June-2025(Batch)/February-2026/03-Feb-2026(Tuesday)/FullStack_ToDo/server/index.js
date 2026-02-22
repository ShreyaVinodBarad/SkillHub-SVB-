// 📌 Here, first we will start server, then connect to database and we will do testing.

const express = require("express")
// 👆 Importing express

require("dotenv").config({ path: "./.env" })
// 👆 If env file is in main folder we can call config directly, but if not u have to mention path(optional)
// 👆 For connecting with database we need Mongodb's URL, so will import .env file

const mongoose = require("mongoose")
// 👆 Importing mongoose to connect with the database

mongoose.connect(process.env.MONGO_URL)
//                       👆 Giving variable where mongo's URL is there.
// 👆 Connecting to database => for the URL given in MONGO_URL variable

const app = express()
// 👆 Creating server

app.use(express.json()) // 👉 The work of this function is to put data in req.body
// 👆 To put data in req.body we have to call a middleware

app.use("/api/todo", require("./routes/todo.routes.js"))
// 👆 Adding routing             👆 adding router => When you will see this URL - "/api/todo", go to this routing file - "./routes/todo.routes.js"

mongoose.connection.once("open", () => {
    console.log("DB connected!")
    app.listen(process.env.PORT, console.log("Server running..."))
    // 👆 Starting Server => Passing argument - Port Number
})
// 👆 Connecting to database => Checking if MongoDB is connected
// 👆 When database gets connected open named event fires it is a custom event and the function given is executed.
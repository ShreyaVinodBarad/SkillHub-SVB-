const { getToDos, createToDo, updateToDo, deleteToDo } = require("../controllers/todo.controller.js")

/*
const express = require("express")
👆 Imports Express package.
const router = express.Router()
👆 Creates a Router object.
👇 Short version 
*/
const router = require("express").Router()
// 👆 Imports Express and creates Router in one line.

// app.get("/", getToDos)
router.get("/", getToDos)

// app.post("/todo", createToDo)
// router.post("/todo", createToDo)
router.post("/", createToDo)

// app.patch("/todo/1", updateToDo)
// router.patch("/todo/1", updateToDo)
router.patch("/1", updateToDo)

// app.delete("/todo/1", deleteToDo)
// router.delete("/todo/1", deleteToDo)
router.delete("/1", deleteToDo)

module.exports = router
// 👆 This is CommonJS default export. Exports router so it can be used in other files (like app.js).
 
// 📌 In this file we have written routes, on which route which function should be called. And on that function call what code should be executed is written in the file named todo.controller.js.
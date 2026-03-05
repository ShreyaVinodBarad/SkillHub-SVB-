const { readToDo, createToDo, updateToDo, deleteToDo } = require("../controllers/todo.controller.js")
//                          👆 Remember to add .js

// 👇 Taking out router's functionality from express.
const router = require("express").Router()

router
    .get("/", readToDo) // 👉 Calling method over router
    // 👆 1st arg => URL, 2nd arg => Which function to call
    .post("/create", createToDo)
    .patch("/modify/:todoId", updateToDo)
    .delete("/delete/:todoId", deleteToDo)

module.exports = router
// 👆 Exporting router variable
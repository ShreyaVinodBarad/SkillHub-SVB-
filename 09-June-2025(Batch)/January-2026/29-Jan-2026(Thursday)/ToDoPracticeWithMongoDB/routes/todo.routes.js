const { getAllToDos, createToDo, updateToDo, deleteToDo } = require("../controller/todo.controller.js")

const router = require("express").Router()

router
    .get("/", getAllToDos)
    .post("/create", createToDo)
    .patch("/update", updateToDo)
    .delete("/delete", deleteToDo)

module.exports = router
// 👆 Default Export
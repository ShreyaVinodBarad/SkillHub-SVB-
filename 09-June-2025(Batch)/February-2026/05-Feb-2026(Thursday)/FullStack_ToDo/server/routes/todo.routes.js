const { readToDo, createToDo, updateToDo, deleteToDo } = require("../controllers/todo.controller.js")
//                          👆 Remember to add .js
const logger = require("../middlewares/logger.js")
const protect = require("../middlewares/protect.js")

// 👇 Taking out router's functionality from express.
const router = require("express").Router()

router
    .get("/", logger, readToDo) // 👉 Calling method over router
    // 👆 1st arg => URL, 2nd arg => Which function to call
    .post("/create", logger, createToDo)
    // 👆 Due to next() after executing code in logger.js file ie. printing Request Recieved! in console, it runs creatToDo function
    .patch("/modify/:todoId", updateToDo)
    .delete("/delete/:todoId", deleteToDo)

module.exports = router
// 👆 Exporting router variable
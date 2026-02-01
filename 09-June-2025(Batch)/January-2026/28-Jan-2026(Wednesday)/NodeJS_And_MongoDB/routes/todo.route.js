const { getToDo, addToDo, updateToDo, deleteToDo } = require("../controllers/todo.controller.js")

const router = require("express").Router()

/*
router.get("/", getToDo)
router.post("/create", addToDo)
router.patch("/update", updateToDo)
router.delete("/delete", deleteToDo)
*/

router
    .get("/", getToDo)
    .post("/create", addToDo)
    .patch("/update/:updateID", updateToDo)
    .delete("/delete/:id", deleteToDo)
//    👆 Creates a DELETE API where :id is a dynamic value from the URL. The route takes an id from the URL, and req.params is used to get that id for deleting the data.

module.exports = router
const { getAllToDos, createToDo, updateToDo, deleteToDo } = require("../controller/todo.controller.js")
/*
👆
- Importing functions from controller file:
getAllToDos → fetch all todos
createToDo → create new todo
updateToDo → update existing todo
deleteToDo → delete todo
*/

const router = require("express").Router()
/*
👆
- Creating a router object using Express
- Helps to handle routes separately (clean code)
*/

router // 👉 Starting route chaining (writing multiple routes together)
    .get("/", getAllToDos)
    .post("/create", createToDo)
    .patch("/update/:tid", updateToDo)
    .delete("/delete/:tid", deleteToDo)
/*
    👆
- This defines UPDATE & DELETE API route
/delete/:tid & /update/:tid → URL path
:tid → dynamic id (todo id)
deleteToDo & updateToDo → function that will run
- Example:
DELETE /delete/123 → Here, 123 is the tid
UPDATE /update/123 → Here, 123 is the tid
*/

module.exports = router
/*
👆 Default Export
- Exporting the router
- So it can be used in main file (index.js)
*/

/*
📌 Simple Flow:
Client → Route → Controller → Response
*/ 
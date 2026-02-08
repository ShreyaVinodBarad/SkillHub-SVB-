const ToDoModel = require("../model/ToDoModel.js")

exports.getAllToDos = (req, res) => {
    res.json({ message: "To - Do Fetch Success!" })
}

exports.createToDo = async (req, res) => {
    try {
        await ToDoModel.create(req.body) // 👉 Passed frontend data
        res.json({ message: "To - Do Create Success!" })
    }
    catch (error) {
        console.log(error)
        res.json({ message: error.message, success: false })
    }
}

exports.updateToDo = (req, res) => {
    res.json({ message: "To - Do Update Success!" })
}

exports.deleteToDo = (req, res) => {
    res.json({ message: "To - Do Delete Success!" })
}
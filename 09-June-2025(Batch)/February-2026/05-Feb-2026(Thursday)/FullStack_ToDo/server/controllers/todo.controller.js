const ToDo = require("../models/ToDo.js")
//                                   👆 Remember to add .js

// Controller function has two arguments request and response. 
exports.createToDo = async (req, res) => {
    try {
        await ToDo.create(req.body) // 👉 Entry goes to database
        // 👆 use model to create to - do
        // The key where we get all the frontend data to backend is req.body

        res.status(201).json({ message: "To - Do create success!", success: true })
        // 👆 We provide a Status as response to browser can understand that backend has got some entry.
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
        // 👆 Status number is important so that browser can understand what happens at the Backend
    }
}

exports.readToDo = async (req, res) => {
    try {
        // await ToDo.find() 👉 Return a data so let's catch it in a variable
        const result = await ToDo.find()
        res.status(200).json({ message: "To - Do read success!", success: true, result })
        // 👆 Took data from database and stored in it result variable. To pass data to frontend called res.json() function and passed result to it.
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.updateToDo = async (req, res) => {
    try {
        //       👇 We get this from todo.routes.js
        const { todoId } = req.params
        // 👆 We pass id through URL dynamically using above code.
        const result = await ToDo.findByIdAndUpdate(todoId, req.body)
        //  Had to pass Id and Body         👆
        res.status(200).json({ message: "To - Do update success!", success: true, result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        const { todoId } = req.params
        await ToDo.findByIdAndDelete(todoId)
        //  Had to only pass Id         👆
        res.status(200).json({ message: "To - Do delete success!", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}
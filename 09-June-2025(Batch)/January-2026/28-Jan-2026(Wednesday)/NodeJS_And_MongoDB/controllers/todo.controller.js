const Note = require("../model/Note.js")

exports.addToDo = async (req, res) => {
    // 👆 async → allows use of await for asynchronous database operations.

    console.log(req.body)
    // 👆 Sending data from frontend i.e.; Postman

    await Note.create(req.body)

    /*
    await Note.create(
        {
            task: "Learn MongoDB",
            desc: "Learn Basics",
            priority: "High"
        }
    )
    */
    /*
    👆
    - Returns a Promise
    - Adds a new note to the database using the Note model.
    - The object { task, desc, priority } is the data being saved.
    */
    res.json({ message: "To - Do Create Success!", success: true })
}

exports.getToDo = async (req, res) => {
    //              👆 Async function to handle request and response.
    const result = await Note.find() // 👈 Get all data from Note
    // 👆 Fetches all to-do data from the database.
    res.json({ message: "Get To - Dos Success!", success: true, result })
    // 👆 Sends the data back to the client in JSON format with a success message.
}
// 👆 This function gets all to-do items from the database and sends them as a JSON response.

exports.updateToDo = async (req, res) => {
    // 👆 Exports an async function to update a to-do.
    const { updateID } = req.params
    // 👆 Gets the ID of the to-do from the URL.
    await Note.findByIdAndUpdate(updateID, req.body)
    // 👆 Finds the to-do by ID and updates it with new data from req.body.
    res.json({ message: "Update To - Do Success!", success: true })
    // 👆 Sends a success response in JSON format.
}
// 👆 This function updates a to-do using its ID with new data sent from the client.

exports.deleteToDo = async (req, res) => {
    // 👆 Exports an async function to delete a to-do.

    const { id } = req.params // 👉 id is a word written in route's file i.e. delete("/delete/:id", deleteToDo) - The word should be same in both controller and route file
    // 👆 Extracts the id value from the URL.
    console.log(id)
    await Note.findByIdAndDelete(id)

    // await Note.findByIdAndDelete("697c72d6717f1dc65324d9e3")
    // 👆 Finds a to-do by its ID and deletes it from the database.

    res.json({ message: "Delete To - Do Success!", success: true })
    // 👆 Sends a success message as a JSON response.
}
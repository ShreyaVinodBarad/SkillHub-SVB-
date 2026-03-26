const ToDoModel = require("../model/ToDoModel.js")
/*
👆
Importing the ToDoModel model (which connects to database and follows schema)
*/

exports.getAllToDos = async (req, res) => {
    // 👆 Creating a function to get all todos (API controller)
    try {
        const result = await ToDoModel.find()
        /*
        👆
        1) ToDoModel.find()
        ToDoModel → your MongoDB model (represents your To-Do collection/table)
        .find() → a Mongoose method that retrieves data
        - So,
        .find() = get all todos from database
        2) const result =
        Stores the fetched data in a variable called result
        */

        res.json({ message: "To - Do Fetch Success!", result })
        /*
        👆 
        - Sending response in JSON format to client
        - You pass result so the client (frontend) can actually receive the todos data.
        */
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.createToDo = async (req, res) => {
    // 👆 Function to create new todo (async because DB work takes time)
    try {
        await ToDoModel.create(req.body) // 👉 Passed frontend data
        /*
        👆
        - Save data to database
        - req.body = data coming from frontend
        */
        res.status(201).json({ message: "To - Do Create Success!" })
        /*
        👆 
        - Send success response
        a) res
        - This is the response object
        - Used to send data from server → client (frontend/Postman)
        b) .status(201)
        - Sets the HTTP status code
        - 201 = Created successfully
        - Used when new data is added to database
        c) .json()
        - Sends response in JSON format
        - JSON = data format (object)
        d) { message: "To - Do Create Success!" }
        - The data you are sending back
        - Here, just a success message
        */
    }
    catch (error) {
        // 👆 If error occurs, handle it
        console.log(error)
        // 👆 Print error in console (for debugging)
        res.status(500).json({ message: error.message, success: false })
        // 👆 Send error message to frontend
    }
}

exports.updateToDo = async (req, res) => {
    // 👆 Function to update todo
    try {
        const { tid } = req.params
        /*
        👆
        - Get the todo ID from the URL
        req.params → values coming from URL
        tid → the specific todo ID
        */
        await ToDoModel.findByIdAndUpdate(tid, req.body)
        /*
        👆
        - Find the todo by ID and update it with new data sent from frontend.
        findByIdAndUpdate → updates the todo
        tid → which todo to update
        req.body → New data coming from frontend/Postman it contains updated values
        */

        res.json({ message: "To - Do Update Success!" })
        // 👆 Just sending success response
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

exports.deleteToDo = async (req, res) => {
    // 👆 Function to delete todo
    try {
        const { tid } = req.params
        /*
        👆
        - Getting the id from URL
        req.params → contains URL values
        { tid } → extracting todo id
        - Example:
        /delete/123 → tid = 123
        */
        await ToDoModel.findByIdAndDelete(tid)
        /*
        👆
        - Deletes the todo from database
        findByIdAndDelete → finds todo by ID and deletes it
        tid → which todo to delete
        */
        res.json({ message: "To - Do Delete Success!" })
        // 👆 Just sending success response
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message, success: false })
    }
}

/*
📌 Overall Flow:
req → data comes from frontend
ToDoModel → interacts with database
res → sends response back to frontend
*/

/*
📌 Status Codes
1) What are Status Codes?
- Status codes are messages from server to client (browser/Postman)
- They tell: request successful or failed
2) Important Status Codes
a) 200 – OK
- Request successful
- Data fetched or operation done correctly
- Example:
You got all todos successfully
b) 201 – Created
- New data created successfully
- Example:
New todo added in database
c) 404 – Not Found
- Requested thing not found
- Example:
API route doesn’t exist
Todo ID not found
d) 500 – Internal Server Error
- Problem in server (your code issue)
- Example:
Database error
Bug in backend code
*/ 
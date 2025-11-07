import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const LearnAPI = () => {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")
    const [desc, setDesc] = useState("")
    const [allNotes, setAllNotes] = useState([])
    const handleSubmitWithFetch = async () => {
        fetch("http://localhost:5000/notes", {
            method: "POST",
            body: JSON.stringify({ task, priority, desc }),
            headers: { "Content-Type": "application/json" }
        })
        // console.log("Note Created Successfully!")
        toast.success("Note Created Successfully!")
        readNotes()
    }
    const handleSubmitWithAxios = async () => {
        await axios.post("http://localhost:5000/notes", { task, priority, desc })
        // console.log("Note Created Successfully!")
        toast.success("Note Created Successfully!")
        readNotes()
    }
    const readNotes = async () => {
        // const readData = await axios.get("http://localhost:5000/notes")
        // console.log(readData) => Return an Object
        const { data } = await axios.get("http://localhost:5000/notes")
        // 👆 data => Array
        setAllNotes(data)
    }
    useEffect(() => {
        readNotes()
    }, [])
    return (
        <div>
            <h3 className='alert alert-primary mx-3 my-3 text-center'>
                LearnAPI Page
            </h3>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <input type="text" onChange={event => setTask(event.target.value)} placeholder='Enter Task...' className='form-control mt-3' />
                                <select class="form-select mt-3" onChange={event => setPriority(event.target.value)}>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                                <textarea class="form-control mt-3" placeholder='Enter Description...' onChange={event => setDesc(event.target.value)}></textarea>
                                <button type="button" class="btn btn-primary mt-3 w-100" onClick={handleSubmitWithFetch}>
                                    Add Task using Fetch
                                </button>
                                <button type="button" class="btn btn-primary mt-3 w-100" onClick={handleSubmitWithAxios}>
                                    Add Task with Axios
                                </button>
                            </div>
                        </div>
                        <table class="table table-bordered my-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Priority</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allNotes.map(item => {
                                        return <tr>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.priority}</td>
                                            <td>{item.desc}</td>
                                            <td className='d-flex justify-content-center align-items-center gap-3'>
                                                <button type="button" class="btn btn-warning">
                                                    Edit
                                                </button>
                                                <button type="button" class="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnAPI
/*
1) json-server --w --p 5000 db.json
a) Command Breakdown:
json-server → runs a fake (temporary) REST API server.
--w (or --watch) → watches your file (db.json).
👆 It means if you change anything inside db.json, the server updates automatically.
--p 5000 (or --port 5000) → runs the server on port 5000 (default is 3000).
db.json → the file that stores your fake data (like users, posts, products, etc).
b) Meaning:
- This command starts a fake API server using your db.json file and keeps watching it for changes, running on http://localhost:5000
---------------------------------------------------------------
2) Axios
a) What it is:
- Axios is a library used in React (and JavaScript) to fetch data from an API or send data to a server.
b) Why we use it:
- It makes working with APIs simpler and cleaner than using the built-in fetch() method.
c) Main Points:
- Axios is used for HTTP requests (GET, POST, PUT, DELETE).
- It returns promises, so we can use .then() and .catch().
- Automatically converts JSON data, so no need for response.json().
- Supports error handling and request cancellation.
- Must be installed using 👉 npm install axios
d) In short: 
- Axios helps us easily send and receive data from APIs in React or JavaScript.
---------------------------------------------------------------
3) React Toastify
a) Installation
npm i react-toastify
- This command installs the React Toastify package in your React project.
- It helps you show popup messages (called toasts) like success, error, warning, etc.
b) Import CSS
import "react-toastify/ReactToastify.css"
- This line adds the default design (style) for the toast messages.
c) Add ToastContainer
<ToastContainer />
- This component is must — it displays all the toast messages on your screen.
- Usually placed once in your app (like inside App.js).
d) Show a Toast Message
toast.success("Note Created Successfully!")
- This shows a green success popup message saying “Note Created Successfully!”
- You can also use:
1) toast.error("Error message")
2) toast.warning("Warning message")
3) toast.info("Info message")
e) In short:
Install → npm i react-toastify
Import CSS → import "react-toastify/ReactToastify.css"
Add <ToastContainer /> in your app - App.jsx
Use toast.success() or others to show popup messages.
---------------------------------------------------------------
4) Basic Syntax:
axios.post(url, data)
- Explanation:
a) url → the address where you want to send data (like an API link).
b) data → the information (object) you want to send.
---------------------------------------------------------------
*/ 
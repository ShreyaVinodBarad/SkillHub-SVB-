import { validate } from "./validationCheck.js"

// console.log("App running...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const description = document.getElementById("description")
const date = document.getElementById("date")
const addTaskBtn = document.getElementById("addTaskBtn")
const root = document.getElementById("root")
const URL = "http://localhost:5000/notes"

addTaskBtn.addEventListener("click", () => {
    console.log(task.value, priority.value, description.value, date.value)
    if (validate(task, priority, description, date)) {
        // console.log("All good!")
        createNote({
            task: task.value,
            priority: priority.value,
            description: description.value,
            date: date.value
        })
        getAllNotes()
    }
    else {
        console.log("All fields are required!")
    }

})

const createNote = async todo => {
    try {
        await fetch(URL, {
            method: "POST", // How to send the data
            headers: { "Content-Type": "application/json" },
            // 👆 Extra info for backend, "Content-Type": "application/json" => Means for normal data not more multimedia
            body: JSON.stringify(todo) // What data to pass backend?
        })
        console.log("Note Created Successfully!")
    } catch (error) {
        console.log(error)
    }
}

const getAllNotes = async () => {
    try {
        const res = await fetch(URL, { method: "GET" })
        const data = await res.json() // res.json() also returns a promise so used await
        // console.log(data)
        const result = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.task}</td>
                <td>${item.priority}</td>
                <td>${item.description}</td>
                <td>${item.date}</td>
                <td>
                    <button type="button" class="btn btn-warning btn-sm mx-2" onclick = "handleEdit('${item.task}', '${item.priority}','${item.description}', '${item.date}')">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm" onclick = "removeNote(${item.id})">Delete</button>
                </td>
            </tr>`).join("") // 👈 join() removes commas and merges all rows
        // console.log(result)
        root.innerHTML = result
    }
    catch (error) {
        console.log(error)
    }
}

window.removeNote = async id => {
    // removeNote has taken to global scope by window
    try {
        await fetch(`${URL}/` + id, { method: "DELETE" })
        console.log("To - Do Delete Successfull! ")
    }
    catch (error) {
        console.log(error)
    }
}

window.handleEdit = (eTask, ePriority, eDescription, eDate) => {
    task.value = eTask
    priority.value = ePriority
    description.value = eDescription
    date.value = eDate

    addTaskBtn.classList.add("d-none")
}

getAllNotes()

/*
1) Command Explanation:
npm i -g json-server@0.17
a) npm → Node Package Manager
b) i → shorthand for install
c) -g → installs globally (available everywhere)
d) json-server@0.17 → installs version 0.17 of json-server

2) Command to start the fake backend server:
json-server --w --p 5000 db.json

3) REST API
=> Method(CRUD):
a) GET => Want to fetch data
b) POST => Add data
c) PUT/ PATCH => Update data
d) DELETE => Delete Data
*/ 
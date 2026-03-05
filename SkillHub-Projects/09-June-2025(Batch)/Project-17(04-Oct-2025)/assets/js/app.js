import { validate, showToast } from "./utility.js"

// console.log("App running...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const description = document.getElementById("description")
const date = document.getElementById("date")
const addTaskBtn = document.getElementById("addTaskBtn")
const root = document.getElementById("root")
const URL = "http://localhost:5000/notes"
const updateTaskBtn = document.getElementById("updateTaskBtn")
let selectedIdToEdit
const result = document.getElementById("result")
const cancleUpdateTaskBtn = document.getElementById("cancleUpdateTaskBtn")


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
        reset()
        showToast(result, "To - Do Create Successfully!")
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
                    <button type="button" class="btn btn-warning btn-sm mx-2" onclick = "handleEdit('${item.task}', '${item.priority}','${item.description}', '${item.date}','${item.id}')">Edit</button>
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
        getAllNotes()
        showToast(result, "To - Do Delete Successfully!", "danger")
    }
    catch (error) {
        console.log(error)
    }
}

window.handleEdit = (eTask, ePriority, eDescription, eDate, eId) => {
    selectedIdToEdit = eId
    task.value = eTask
    priority.value = ePriority
    description.value = eDescription
    date.value = eDate

    addTaskBtn.classList.add("d-none")
    updateTaskBtn.classList.remove("d-none")

    cancleUpdateTaskBtn.classList.remove("d-none")
}

updateTaskBtn.addEventListener("click", async () => {
    try {
        const body = {
            task: task.value,
            priority: priority.value,
            description: description.value,
            date: date.value
        }
        await fetch(`${URL}/${selectedIdToEdit}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        console.log("Update Successfull!")
        getAllNotes()
        reset()
        addTaskBtn.classList.remove("d-none")
        updateTaskBtn.classList.add("d-none")
        cancleUpdateTaskBtn.classList.add("d-none")
        showToast(result, "To - Do Update Successfully!", "warning")

    } catch (error) {
        console.log(error)
    }
})

cancleUpdateTaskBtn.addEventListener("click", () => {
    reset()
    cancleUpdateTaskBtn.classList.add("d-none")
    addTaskBtn.classList.remove("d-none")
    updateTaskBtn.classList.add("d-none")
})

getAllNotes()

const reset = () => {
    task.value = ""
    priority.value = ""
    description.value = ""
    date.value = ""

    task.classList.remove("is-valid")
    priority.classList.remove("is-valid")
    description.classList.remove("is-valid")
    date.classList.remove("is-valid")
}

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
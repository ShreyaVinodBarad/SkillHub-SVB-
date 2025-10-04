import { validate } from "./validationCheck.js"

// console.log("App running...")
const task = document.getElementById("task")
const priority = document.getElementById("priority")
const description = document.getElementById("description")
const date = document.getElementById("date")
const addTaskBtn = document.getElementById("addTaskBtn")

addTaskBtn.addEventListener("click", () => {
    console.log(task.value, priority.value, description.value, date.value)
    if (validate(task, priority, description, date)) {
        console.log("All good!")
    }
    else {
        console.log("All fields are required!")
    }

})

setTimeout(() => {
    console.log("settimeout called!")
}, 2000)
const task = document.getElementById("taskInp");
let taskList = document.getElementById("listOfTask");
// let toDoArr = [];
let toDoArr = ["Learn HTML", "Learn CSS", "Learn JS"]; // Writing hard code...
function setterForInp() {
    task.value = "";
}
function addTask() {
    let getTask = task.value;
    toDoArr.splice(0, 0, getTask);
    displayTasks();
    setterForInp();
}
function displayTasks() {
    let add = "";
    let index = 0;
    for (let task of toDoArr) {
        add += `<div class = "alert alert-success d-flex justify-content-between align-items-center">
        ${task}
        <button type = "button" class="btn btn-danger" id="delTask" onclick="deleteTask(${index})">
        Delete
        </button>
        </div>`;

        index++;
    }
    taskList.innerHTML = add;
}

function deleteTask(i) {
    toDoArr.splice(i, 1);
    displayTasks();
    // console.log(toDoArr);
}

displayTasks();
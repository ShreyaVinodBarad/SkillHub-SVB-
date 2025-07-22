const task = document.getElementById("taskInp");
let taskList = document.getElementById("listOfTask");
let toDoArr = [];
function setterForInp() {
    task.value = "";
}
function addTask() {
    let getTask = task.value;
    toDoArr.push(getTask);
    displayTasks();
    setterForInp();
}
function displayTasks() {
    let add = "";
    for (let task of toDoArr) {
        add += `<div class = "alert alert-success d-flex justify-content-between align-items-center">
        ${task} 
        <button type = "button" class="btn btn-danger" id="delTask" onclick="deleteTask()">
        Delete
        </button>
        </div>`;
    }
    taskList.innerHTML = add;
}

function deleteTask() {

}
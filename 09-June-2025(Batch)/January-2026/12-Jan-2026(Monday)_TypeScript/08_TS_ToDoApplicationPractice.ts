type NOTE = {
    task: string,
    desc: string,
    priority: string,
    complete: boolean,
    id: number
}

const All_ToDo: NOTE[] = []

const readToDo = (): NOTE[] => {
    return All_ToDo
}

const createToDo = (arg: NOTE) => {
    All_ToDo.push(arg)
}

const deleteToDo = (id: number) => {
    // All_ToDo.filter(item => item.id !== id) 👉 Method - 01

    All_ToDo.splice(All_ToDo.findIndex(item => item.id === id), 1)
    // 👆 Method - 02
    // IndexNumber = All_ToDo.findIndex(item => item.id === id)
}


console.log(readToDo())

createToDo({
    id: 1,
    task: "Learn TypeScript",
    desc: "Learning Important Topics!",
    priority: "High",
    complete: true
})

createToDo({
    id: 2,
    task: "Learn JavaScript",
    desc: "Learning Main Topics!",
    priority: "Medium",
    complete: false
})

createToDo({
    id: 3,
    task: "Learn BootStrap",
    desc: "Learning Main Topics!",
    priority: "Low",
    complete: true
})
console.log("After Create To - Do!")
console.log(readToDo());

deleteToDo(3);
console.log("After Delete To - Do!")

console.log(readToDo());
// 📌 When you do some changes in the file you have to run command: tsc  08_ToDoApplicationPractice.ts to avoid this we will use this command so if any changes is made the code gets updated automatically: tsc  08_ToDoApplicationPractice.ts --watch  
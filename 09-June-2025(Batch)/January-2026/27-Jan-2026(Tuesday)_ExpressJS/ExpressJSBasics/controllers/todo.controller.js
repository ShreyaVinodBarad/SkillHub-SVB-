// const getToDos = (req, res) => {
exports.getToDos = (req, res) => {
    res.json({ message: "Get Success!", success: true })
}

exports.createToDo = (req, res) => {
    res.json({ message: "Create Success!", success: true })
}

exports.updateToDo = (req, res) => {
    res.json({ message: "Update Success!", success: true })
}

exports.deleteToDo = (req, res) => {
    res.json({ message: "Delete Success!", success: true })
}

/*
📌 Export syntax
a) ES Module (modern JavaScript)
export const getToDos = (req, res) => {}
b) CommonJS (Node.js)
exports.getToDos = getToDos
- Export is used to share functions/variables with other files.
*/ 
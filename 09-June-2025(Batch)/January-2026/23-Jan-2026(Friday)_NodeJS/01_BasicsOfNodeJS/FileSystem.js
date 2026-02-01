// 👇 Modules Syntax
// import { demo } from "test"

// 👇 Common JS Syntax
// const { demo } = require("test")
/*
👆
a) Meaning:
- It imports the demo function/object from the test module using CommonJS (Node.js module system).
b) Breakdown:
require("test") → load the module
{ demo } → destructure only demo from it
- Used mainly in Node.js (backend).
*/

const fs = require("fs")
// 👆 Imports Node.js File System module
fs.writeFileSync("FileSystem.txt", "Hello! Learning File System in NodeJS.")
// 👆 Creates (or overwrites) a file and writes text into it
fs.unlinkSync("FileSystem.txt")
// 👆 Deletes the file
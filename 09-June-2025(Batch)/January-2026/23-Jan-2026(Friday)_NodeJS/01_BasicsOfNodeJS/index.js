console.log("App Running...")
console.log(document)
// console.log(process)
/*
1) JavaScript = Engine + DOM + Web APIs
a) Engine
- Runs JavaScript code
- Example: V8 engine (Chrome)
b) DOM (Document Object Model)
- Used to interact with HTML
- Change text, styles, buttons, inputs, etc.
- document.getElementById("title").innerText = "Hello";
👉 DOM exists ONLY in browser
c) Web APIs
- Browser-provided features
- Examples:
fetch(), setTimeout(), localStorage, navigator
📌 Use case:
Frontend / UI / Web pages
--------------------------------------------------------
2) Node.js = Same Engine + Node APIs
a) Engine (SAME ENGINE)
- Node.js also uses V8 engine
- YES, engine is SAME
b) NO DOM
- No HTML
- No document, no window
// ❌ This will not work in Node.js
document.getElementById("box");
c) Node APIs (Extra Powers)
File System, Database, Server, OS access
- Examples:
const fs = require("fs");        // file system
const http = require("http");   // server
📌 Use case:
Backend / Server-side / APIs
--------------------------------------------------------
3) “JS and Node engine is same?”
YES
- JavaScript Engine is SAME (V8)
❌ Environment is DIFFERENT
Browser → DOM + Web APIs
Node.js → File system + DB + Server APIs
--------------------------------------------------------
4) One-line summary:
👉 JavaScript is the language
👉 Browser gives DOM
👉 Node.js gives backend power
--------------------------------------------------------
*/ 
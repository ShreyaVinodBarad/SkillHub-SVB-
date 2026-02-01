// CLI stands for Command Line Interface. It is a way to interact with a computer or program by typing text commands instead of using a graphical interface (GUI).

console.log(process.argv)
/*
👆
- process.argv is an array in Node.js.
- It stores the command-line arguments used to run your program.
- argv means Argument Vector.
1) Output:
a) First value
'C:\\Program Files\\nodejs\\node.exe'
- This is the path of Node.js executable
- It tells which Node.js program is running your file
- Node itself is running first.
b) 'M:\\...\\index.js'
- This is the path of your JavaScript file
- It tells Node which file to execute
- This is your project file.
2) Important:
- If you pass extra arguments like:
node index.js Shreya
- Then output will be:
[
  'node.exe',
  'index.js',
  'Shreya'
]
*/

const fs = require("fs")

/*
if ("User says create") {
    // Create File
} else if ("User says delete") {
    // Delete File
} else {
    // Default Message
}
*/

const [, , operation, fileName] = process.argv
// if (process.argv[2] === "create") {
if (operation === "create") {
    // 👇 Create File
    // fs.writeFileSync("CLI.txt", "Designing a simple CLI!")
    // fs.writeFileSync(process.argv[3], "Designing a simple CLI!")
    fs.writeFileSync(fileName, "Designing a simple CLI!")
    // } else if (process.argv[2] === "delete") {
} else if (operation === "delete") {
    // 👇 Delete File
    // fs.unlinkSync("CLI.txt")
    fs.unlinkSync(fileName)
} else {
    // Default Message
    console.log(`
        1 Please type create to create a new file     
        eg: node index.js create test.html

        2 Please type delete to delete file
        eg: node index.js delete test.html   
    `)
}

/*
📌 
- When we type a website name in the browser, the browser sends a request to a server asking for files like HTML, CSS, and JavaScript, and the server sends a response back to the user’s computer, which the browser then displays. 
- In PHP, we usually need a web server like Apache (or Nginx) because PHP code cannot run on its own; Apache handles the request and passes it to the PHP engine, which processes the code and returns the response. 
- In Node.js, there is no need for Apache because Node.js itself can create and run a server using built-in modules like http or frameworks like Express. 
- This means Node.js acts as both the server and the runtime, directly handling requests and sending responses, while PHP depends on an external server like Apache to do this job.
*/ 
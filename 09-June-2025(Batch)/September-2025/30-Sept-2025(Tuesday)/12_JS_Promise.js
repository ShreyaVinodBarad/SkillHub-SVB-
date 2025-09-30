/*
- A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
- A Promise acts as a placeholder for a value that you’ll get in the future, like data from a server.
It helps handle asynchronous tasks without using deeply nested callbacks (callback hell).
- States of a Promise:
a) Pending → The operation is still running.
b) Fulfilled → The operation completed successfully (resolve).
c) Rejected → The operation failed (reject).
*/
const x = new Promise((resolve, reject) => {
    // Line of code...
    // reject() => Promise Fail
    // resolve() => Promise Success
    resolve("Complete Successfully!")
    // reject("Network Issue!")
})
x
    .then((data) => console.log("Success!", data)) // Runs when Resolve
    // 👆 .then() is called when the promise is resolved.
    .catch((err) => console.log("Fail!", err)) // Runs when Reject
// 👆 .catch () is called when the promise is rejected.

const test = async () => {
    try {
        data = await x
        console.log("Done!", data)
    }
    catch (err) {
        console.log("Reject!", err)
    }
}
/*
👆
- await pauses the function until the promise resolves or rejects.
- try...catch handles success and error cases.
*/
test()
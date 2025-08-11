/*
1) What is Fallback?
- In JavaScript, when people say “fallback in a function”, they usually mean:
A backup value or action that the function uses when the main value or action isn’t available.
- It’s like having a Plan B for your code.

2) Example without Fallback
*/
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet(); // // Hello, undefined  (because name wasn't provided)

/*
3) Example with fallback
- We can give a default value so that the function still works:
*/
function sayHello(name = "Guest") {
    console.log(`Hello ${name}!`);
}
sayHello(); // Hello, Guest
// If the caller doesn’t provide a name, the fallback "Guest" is used.
sayHello("Shreya") // Hello, Shreya

/*
4) In short:
- A fallback in a function is just a backup value or action so your code doesn’t break or behave weirdly when something is missing.
*/ 
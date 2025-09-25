/*
1) var
- The old way of declaring variables in JavaScript.
- Can be redeclared (you can create it again with the same name).
- Functional Scoped -> Ingnores {}

2) let
- The modern way to declare variables.
- Cannot be redeclared in the same scope (but value can be changed).
- Block-scoped → it only exists inside { }.

3) const
- Used when the value should not change.
- Cannot be redeclared or reassigned.
- Block-scoped like let.
- With const, if you use objects or arrays, you can change inside values, but not reassign the whole variable.

4) Summary
| Feature      | var       | let                   | const                   |
| -------------| ----------|-----------------------|-------------------------|
|Scope         | Functional| Block                 | Block-scoped            |
|Redeclare     | Allowed   | Not allowed           | Not allowed             |
|Reassign value|  Allowed  | Allowed               | Not allowed             |
|Default use?  | Avoid     | when value can change | when value never changes|

5) What is Hoisting?
- Hoisting in JavaScript means:
Before running your code, JavaScript moves all variable and function declarations to the top of their scope.
- Variable Hoisting
a) var is hoisted but initialized with undefined.
b) let and const are hoisted too, but they stay in a “temporal dead zone” until the line where you declare them → you can’t use them early.
- In short:
a) Declarations are moved up, not assignments.
b) Functions → can be used before declared.
c) var → hoisted but becomes undefined if used early.
d) let/const → hoisted but not usable until declared.

6) Temporal Dead Zone:
a) What is TDZ?
- Temporal Dead Zone (TDZ) = The time period when a variable is created (hoisted) but cannot be used yet because it hasn’t been given a value.
- TDZ is like a “no-entry zone” for variables — they exist, but you can’t touch them until they’re declared.
- It only happens with let and const, not with var.
b) Why does it happen?
- let and const are hoisted (moved to the top of their scope), but not initialized.
- Until the code execution reaches their declaration line, they stay in the TDZ.
- var does not have this problem because it is hoisted and initialized with undefined.
c) In short:
1) TDZ = the “danger zone” between hoisting and initialization.
2) You can’t use let or const variables before declaring them.
3) var doesn’t have TDZ, but it can cause bugs because it’s automatically set to undefined.

7) Closure:
- A closure happens when a function is able to remember and access variables from its outer function’s scope, even after the outer function has finished running.
*/
// Reinitialization
var b = 25
b = 20
console.log(b) // 20
let a = 23
a = 25
console.log(a) // 25
const x = 23
// x = 50
console.log(x) // Error!

// While using const it is mandatory to write at the declare and initialize at the same time 👇
const z = 23
console.log(z) // 23

// Hoisting and TDZ
console.log(d) // undefined
var d = 23
// console.log(e) => Error (temporal dead zone)
let e = 20
// console.log(g) => Error (temporal dead zone)
const g = 45

// Scope of the Variable 👇
function test() {
    // Variable declared & initialize inside the function can be accessed any where in the function. 👇
    var h = 10
    let i = 10
    const j = 10
    if (true) {
        var p = 20 // Functional Scope
        let q = 20 // Blocked Scope => Exists in {}
        const r = 20 // Blocked Scope => Exists in {}
        console.log(h, i, j) // 10 10 10 => Closure
    }
    console.log("p = ", p) // 20
    // console.log("q = ", q) - q is not defined => Error
    // console.log("r = ", r) - r is not defined => Error
    console.log(h, i, j) // 10 10 10
}
// console.log(p, q, r) => Error - Cannot access variables outside the function
test()

// Closure 👇
function outer() {
    let message = "Hello!"
    function inner() {
        console.log(message)
    }
    return inner
}
const res = outer()
// console.log(res()) => [Function: inner] 
res() // Hello!
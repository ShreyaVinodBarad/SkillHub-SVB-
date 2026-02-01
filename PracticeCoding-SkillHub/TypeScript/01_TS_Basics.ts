/*
1) What is TypeScript?
- TypeScript is a superset of JavaScript developed by Microsoft.
TypeScript is a superset of JavaScript means all JavaScript code is valid TypeScript code, but TypeScript adds extra features like static typing on top of JavaScript.
- It adds static typing to JavaScript, which helps developers catch errors at compile time instead of runtime.

a) What is Static Typing?
- Static typing means the data type of a variable is decided at compile time and cannot change later.
- In TypeScript, once a variable is assigned a type, it must always store values of that same type.

- In simple words:
TypeScript = JavaScript + Types + Better Error Checking
*/
const fname = "Ross"
let age = 23
/*
👆
- let allows reassignment
- TypeScript infers the type as number
- Now age can only store numbers
*/
age = 25
/*
=> Valid
- Because 30 is also a number
- Type is consistent
*/

/*
age = "John"
👆
❌ Not allowed in TypeScript
Why?
- age was initially declared as a number
- Assigning a string later is not permitted
📌 This shows TypeScript is Strictly Typed
*/

/*
1) Key Concepts Demonstrated
a) Type Inference
- TypeScript automatically detects types:
let age = 23      // inferred as number
const fname = "Ross" // inferred as string

b) Strict Typing (Type Safety)
- Once a type is assigned, it cannot change:
let age = 23
age = "John" // ❌ Error in TypeScript
*/

/*
Summary Notes
- TypeScript helps prevent bugs before code runs
- File extension: .ts
- Types are inferred automatically
- Once a variable has a type, it cannot change
- Makes large applications easier to maintain
*/ 
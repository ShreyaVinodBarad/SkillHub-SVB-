type TODO = {
    id: number,
    task?: string,
    desc: string
}

const x: TODO = {
    // 👆 x is a constant variable
    id: 1,
    desc: "Fake Description..."
}
/*
👆
: TODO 👉 Type Annotation
- This is the key part.
: tells TypeScript:
“I am about to define the type of x”
- TODO is a custom type
- So this means:
x must follow the structure defined by TODO
*/

const y: Partial<TODO> = {}
// 👆 Making all properties of TODO object optional => I may give some properties of TODO, or none.
/*
📌 What is Partial?
Partial<T> is a built-in TypeScript utility type that makes all properties of T optional.
*/ 
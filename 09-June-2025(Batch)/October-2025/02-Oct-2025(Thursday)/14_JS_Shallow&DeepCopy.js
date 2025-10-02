// Shallow Copy 👇
const arr1 = ["Dell", "HP"] // arr1 contains primitive values ("Dell", "HP").
const x = [...arr1] // When you do const x = [...arr1], it copies the values — not references — because primitives (strings, numbers, booleans, etc.) are stored by value.
x[0] = "Apple" // So changing x[0] does not affect arr1[0].
console.log(x) // [ 'Apple', 'HP' ]
console.log(arr1) // [ 'Dell', 'HP' ]
// 👆 Result: x and arr1 are independent — changes in one don’t affect the other.

// Shallow Copy 👇
/*
👇
- Here, each element of the array is an object — a non-primitive value.
- When you do const y = [...arr], the array itself is copied (a new array is created), but the objects inside are not cloned — only their references are copied.
- That means arr[0] and y[0] both point to the same object in memory.
- It modifies the same object — so the change is reflected in both arr and y.
- Result: Both arr and y now show Ethan for the first element.
*/
const arr = [
    { name: "Ross" },
    { name: "Kate" }
]
const y = [...arr] // Shallow Copy => Non primitive value 
y[0].name = "Ethan"
console.log(arr) // [ { name: 'Ethan' }, { name: 'Kate' } ]
console.log(y) // [ { name: 'Ethan' }, { name: 'Kate' } ]

// Deep Copy 👇
// const res = JSON.stringify(arr) => JSON.stringify(arr) converts the array of objects into a JSON string.
// const z = JSON.parse(res) => JSON.parse(...) then creates a brand - new copy of that data.
const z = JSON.parse(JSON.stringify(arr)) // Shorter Syntax
z[0].name = "Bill" // This means both the array and its nested objects are duplicated — no shared references.
console.log(z) // [{ name: 'Bill' }, { name: 'Kate' }]
console.log(arr) // [ { name: 'Ethan' }, { name: 'Kate' } ]  
// Changing z[0].name does not affect arr[0].name. 

// Deep Copy 👇
/*
👇
- structuredClone() is a modern built-in JavaScript method for deep copying objects.
- It works like JSON-based deep copy but supports more data types (e.g., Dates, Maps, Sets, etc.).
- It creates a completely independent copy of arr.
- Result: a and arr are completely separate — modifying one does not affect the other.
*/
const a = structuredClone(arr);
a[0].name = "Bill";
console.log(a); // [ { name: 'Bill' }, { name: 'Kate' } ] 
console.log(arr); // [ { name: 'Ethan' }, { name: 'Kate' } ]

// Summary 👇
/*
1) 
Copy Type	             => Shallow Copy (Primitive)
Copy Method	             => [...]
Works For	             => Primitive values
Copies Nested Objects?	 => N/A
Changes Affect Original? => No

2)
Copy Type	             => Shallow Copy (Non-Primitive)
Copy Method	             => [...] 
Works For	             => Objects/arrays
Copies Nested Objects?	 => No, copy's reference
Changes Affect Original? => Yes

3) 
Copy Type	             => Deep Copy
Copy Method	             => JSON.parse(JSON.stringify(...)) 
Works For	             => Simple objects/arrays 
Copies Nested Objects?	 => Yes
Changes Affect Original? => No

4) 
Copy Type	             => Deep Copy (Modern)
Copy Method	             => structuredClone()
Works For	             => All structured data
Copies Nested Objects?	 => Yes
Changes Affect Original? => No
*/
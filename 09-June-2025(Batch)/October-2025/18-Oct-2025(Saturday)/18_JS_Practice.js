const users = [
    { id: 1, name: "John", age: 25, city: "Pune", isActive: true, salary: 35000 },
    { id: 2, name: "Komal", age: 22, city: "Mumbai", isActive: false, salary: 28000 },
    { id: 3, name: "Akash", age: 28, city: "Nashik", isActive: true, salary: 50000 },
    { id: 4, name: "Vishal", age: 30, city: "Nagpur", isActive: true, salary: 42000 },
    { id: 5, name: "Mayuri", age: 21, city: "Pune", isActive: false, salary: 25000 },
    { id: 6, name: "Yogesh", age: 26, city: "Mumbai", isActive: true, salary: 39000 },
    { id: 7, name: "Pooja", age: 24, city: "Pune", isActive: true, salary: 31000 },
    { id: 8, name: "Shital", age: 29, city: "Kolhapur", isActive: false, salary: 27000 }
];

// 1) Get all users from Pune older than 25?
const res1 = users.filter(item => item.city === "Pune" && item.age >= 25)
console.log(res1)

// 2) Get only names of inactive users?
const res2 = users.filter(item => item.isActive === false).map(item => item.name)
console.log(res2)

// 3) Count total number of active users.
const res3 = users.filter(item => item.isActive === true)
console.log(res3.length)

// 4) Total Salary of active users only.
const res4 = users.filter(item => item.isActive === true).reduce((total, item) => total + item.salary, 0)
console.log(res4)

// 5) Get average salary of Mumbai users.
const res5 = users.filter(item => item.city === "Mumbai")
const salary = res5.reduce((total, item) => total + item.salary, 0)
console.log(salary / res5.length)

// ----------------------------------------------------------------

// Shallow Copy 👇
const arr = [1, 2, 3, 4]
const x = [...arr] // creates a shallow copy of arr.
x.push(5)
console.log(x) // [ 1, 2, 3, 4, 5 ]
console.log(arr) // [ 1, 2, 3, 4 ]
// 👆 Since arr has only primitive values (numbers), both arrays are completely independent. Changing x doesn’t affect arr.

const t = arr
t.push(6)
console.log(t) // [ 1, 2, 3, 4, 6 ]
console.log(arr) // [ 1, 2, 3, 4, 6 ]
// 👆 Here, t = arr doesn’t copy — it just points to the same memory location.So, changing one affects the other(both refer to the same array).

const arr1 = [{ name: "Kate", age: 23 }, { name: "Ross", age: 24 }]
const y = [...arr1]
y.push({ name: "Ethan", age: 23 })
console.log(y)  // [{ name: 'Kate', age: 23 },{ name: 'Ross', age: 24 },{ name: 'Ethan', age: 23 }]
console.log(arr1) // [ { name: 'Kate', age: 23 }, { name: 'Ross', age: 24 } ]
// 👆 y = [...arr1] → makes a shallow copy of the outer array only. That means arr1 and y are different arrays, but the objects inside({ name, age }) still share the same references.

const d = arr1
d.push({ name: "Ethan", age: 23 })
console.log(d) // [{ name: 'Kate', age: 23 },{ name: 'Ross', age: 24 },{ name: 'Ethan', age: 23 }] 
console.log(arr1) // [{ name: 'Kate', age: 23 },{ name: 'Ross', age: 24 },{ name: 'Ethan', age: 23 }]
// 👆 Again, d = arr1 means both are the same array reference, so changes affect both.

// Deep Copy 👇
const z = JSON.parse(JSON.stringify(arr))
const s = JSON.parse(JSON.stringify(arr1))
// 👆 Deep Copy means a completely new copy is made of the array and all nested objects. JSON.stringify(arr1) → converts the array into a JSON string. JSON.parse(...) → turns that string back into a new array with new objects.
s[0].name = "Shreya"
console.log(s) // [{ name: 'Shreya', age: 23 },{ name: 'Ross', age: 24 },{ name: 'Ethan', age: 23 }]
console.log(arr1) // [{ name: 'Kate', age: 23 },{ name: 'Ross', age: 24 },{ name: 'Ethan', age: 23 }]

// 📌 Use deep copy when in an array has object, array, or function inside it. That is non-primitive values.
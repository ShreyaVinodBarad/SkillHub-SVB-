/*
1) Rest Operator (...)
- Used when collecting multiple values into a single variable.
- Where used:
a) In function parameters
b) In destructuring assignments
c) LEFT HAND SIDE
const [a, b, ...rest] = [1, 2, 3, 4, 5] => ...rest collects the remaining values — again rest operator.

2) Spread Operator (...)
- Used when spreading (expanding) the elements of an array/object.
- Where used:
a) In function calls
const arr = [1, 2, 3]
console.log(Math.max(...arr)) => Here ...arr spreads the array into 1, 2, 3 — so it’s a spread operator
b) In array or object literals
const arr1 = [1, 2]
const arr2 = [3, 4]
const res = [...arr1, ...arr2]
console.log(res)
c) RIGHT HAND SIDE
*/

// 👇 Without Rest Operator
const sum = (n1, n2, n3) => n1 + n2 + n3
// const res = sum(2, 3) => 5
const res = sum(2, 3) // NaN
console.log(res)

// 👇 With Rest Operator
// Rest Operator with Function 👇
const rest = (...n) => n
// 👆 Catched values in an Array => Rest Operator
const res1 = rest(10, 20, 30)
console.log(res1) // [ 10, 20, 30 ]

const add = (...n) => n.reduce((sum, item) => sum + item, 0)
const res2 = add(10, 20, 30)
console.log(res2) // 60 
// Rest Operator using Array Destructuring 👇
const arr = [10, 20, 30, 40, 50]
const [x, ...y] = arr
console.log(x, y) // 10 [ 20, 30, 40, 50 ]
// Rest Operator using Object Destructuring 👇
const obj = { name: "Ross", age: 23, city: "London" }
const { name, ...z } = obj
console.log(name) // Ross
console.log(z) // { age: 23, city: 'London' }

// 👇 With Spread Operator
const brands = ["Dell", "HP", "Apple"]
const p = [...brands]
console.log(p) // [ 'Dell', 'HP', 'Apple' ]
console.log(...brands) // Dell HP Apple
// With Object 👇
const stud = { name: "Ross", age: 23, city: "London" } // Different Object Address
const q = { ...stud } // Different Object Address => New Object is Created => Shallow Copy
// But 👇
// const s = stud => Same address as stud => Changes in both s and stud will refelect in both of them as they are in the same address.

// Akash Sir => Example
// const test = (...arg) => arg ==> [10,20,30]
const test = (x, ...arg) => arg
const res3 = test(10, 20, 30)
// const test = arg => arg ==> 10 
console.log(res3)

// Array overrides if has a key with same name 👇
const objStud = { name: "Ross", age: 20, name: "Ethan" }
console.log(objStud) // { name: 'Ethan', age: 20 }

const body = { email: "shreyavbarad72@gmail.com", password: "123" }
const pass = "Shreya@123"
const x1 = { ...body, password: pass }
console.log(x1)
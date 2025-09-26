/*
1) What is Arrow Function? 
- Arrow functions in JavaScript are a shorter way to write functions. They were introduced in ES6 (ECMAScript 2015) and are often used because they make code cleaner and more concise.
*/

// Named Function 👇
function add(n1, n2) {
    return n1 + n2
}

// Arrow Function 👇
const sum = (n1, n2) => {
    return n1 + n2
}
console.log(sum(2, 3))

// If we are having single statment to return there is no need of return keyword and {} 👇
// If u are having single parameter than there is no need of () 👇
const sq = arg => arg * arg
console.log(sq(3))

const db = n1 => {
    n1 += n1
    return n1 + 5
}
console.log(db(6))

const demo = (n1, n2) => [n1, n2]
console.log(demo(2, 3))

// If u are returnung an object as one statement then in arrow function you have to use {} because compiler may get confused whether the {} are for obj or fun body. 👇
const test = (name, age) => {
    return { name, age }
}
console.log(test("Shreya", "23"))
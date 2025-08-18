/*
1) What is a loop?
- A loop lets you repeat a block of code multiple times automatically.

2) Why use loops?
- If you need to run the same code again and again, you don't have to write it multiple times.
- Loops will save your time.

3) Types of loops in JS:
a) for loop
- Used when you know how many times you want to repeat.
- Structure:
for (initialization; condition; update) {
// code to repeat
}

b) while loop
- Used when you do not know exactly how many times you need to repeat, but you know the condition.
- Structure:
while (condition) {
// code to repeat
}

c) do...while loop
- Similar to while, but executes the code at least once, even if the condition is false initially.
- Structure:
do {
// code to repeat
} while (condition);

d) for...of loop
- Loops over values of iterable objects like arrays, strings, maps, sets.
- Structure:
for (let item of iterable(array, string)) {
// use item
}

e) for...in loop
- Loops over keys (property names or indexes) of an object or array.
- Structure:
for (let key in object) {
// console.log(key) => to get key
// console.log(object[key]) => to get value of key
}
*/

// for-of Loop for Array 👇
const arr = ["Dell", "HP", "Apple", "Asus"];
for (const item of arr) {
    console.log(item);
}

// for-of Loop for string 👇
const str = "Shreya";
for (char of str) {
    console.log(char);
}

// for-of Loop - Array of Objects 👇
// Example: 01
const studs = [
    { name: "Shreya", age: 23 },
    { name: "Gouri", age: 22 },
    { name: "Padma", age: 49 }
];
for (item of studs) {
    console.log(item.name, item.age);
}
// Example: 02
const cart = [
    { name: "Laptop", price: 85000, qty: 1 },
    { name: "Mouse", price: 500, qty: 2 },
    { name: "SSD", price: 8000, qty: 1 },
    { name: "RAM", price: 8500, qty: 2 },
]
let total = 0;
for (item of cart) {
    console.log(item.name, item.price);
    // 👇 To get total price of the Item
    total += item.price * item.qty;
    // 👆 total = total + item.price * item.qty;
    console.log(item.name, item.price * item.qty);
}
console.log(`Total bill ${total}.`);

/*
for Loop 👇
*/
const arrOfBrand = ["Apple", "HP", "Lenovo", "Dell"];
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; i <= arrOfBrand.length - 1; i++) {
    console.log(arrOfBrand[i]);
}

/*
while Loop 👇
*/
let a = 0;
while (a < 4) {
    console.log(a);
    a++;
}
/*
👆
Entry Control Loop 
- First checks the condition and then runs the loop.
*/

/*
do - while Loop 👇
*/
let z = 5;
do {
    console.log(z);
    z--
} while (z >= 1)
// Exit Control Loop 👆

/*
A question of array: 👇
*/
let [...result] = ["Dell", "HP", "Apple"];
console.log(result);
/*
👆
Step 1) Right-hand side
["Dell", "HP", "Apple"] → This is already an array.

Step 2) Left-hand side
[ ...result ] means:
- The square brackets [ ] tell JavaScript “destructure an array”.
- The ...result inside means collect the rest of the items into result.
- So what happens?
a) JS looks at the right-hand array: ["Dell", "HP", "Apple"].
b) It sees ...result and assigns all elements into result.

Step 3) Value of result
result = ["Dell", "HP", "Apple"]
- So output is:
[ 'Dell', 'HP', 'Apple' ]
- Basically, it just copies the array into result.
*/ 
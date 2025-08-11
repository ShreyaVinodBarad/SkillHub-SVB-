/*
1) push()
- Adds one or more items to the end of an array.

2) pop()
- Removes the last item from the array.

3) unshift()
- Adds items to the start of an array

4) shift()
- Removes the first item from an array.

5) concat()
- Joins two or more arrays into one.

6) slice(startIndex, endIndex)
- Copies part of an array into a new one (doesn’t change the original). 
- It gives an array which does not include the item of endIndex.

7) splice(start, deleteCount, item1, item2, ...)
- Changes an array by removing or adding items.

8) indexOf()
- Finds the first position of a value.

9) includes()
- Checks if an array contains a value.

10) map()
- Creates a new array by applying a function to each item.
- map() always return an Array, it's just give a copy with data transformed.
- map() used for Data Transform - Changing Values 
- Syntax
array.map(function(currentValue, index, array) {
    // return new value for the new array
});
=> Parameters:
a) currentValue → the current element being processed.
b) index (optional) → the index of the current element.
c) array (optional) → the original array. 

11) filter()
- Creates a new array with items that pass a test.

12) find()
- Returns the first item that passes a test.

13) findIndex()
- Returns the index of the first item that passes a test.

14) sort()
- Sorts the array (changes original).

15) reduce()
- Reduces the array to a single value.
- Syntax
array.reduce(function(accumulator, currentValue, index, array) {
    // return updated accumulator
}, initialValue);
=> Parameters:
a) accumulator → stores the running result after each iteration.
b) currentValue → the current element in the array.
c) index (optional) → the index of the current element.
d) array (optional) → the original array.
e) initialValue (optional but recommended) → starting value for the accumulator.

16) reverse()
- Reverses the order of the array (changes original).

17) forEach()
- Runs a function for each item in the array.
*/
const arr = ["Dell", "Apple", "HP", "Lenovo"];
// 1) push() Method 👇
arr.push("Windows");
console.log(arr);  // [ 'Dell', 'Apple', 'HP', 'Lenovo', 'Windows' ]

// 2) pop() Method 👇
arr.pop();
console.log(arr); // [ 'Dell', 'Apple', 'HP', 'Lenovo' ]

// 3) unshift() Method 👇
arr.unshift("Windows");
console.log(arr); // [ 'Windows', 'Dell', 'Apple', 'HP', 'Lenovo' ]

// 4) shift() Method 👇
arr.shift();
console.log(arr); // [ 'Dell', 'Apple', 'HP', 'Lenovo' ]

// 5) concat() Method 👇
const arr1 = [1, 2, 3, 4];
const arrConcat = arr1.concat(arr);
console.log(arrConcat) // [ 1, 2, 3, 4, 'Dell', 'Apple', 'HP', 'Lenovo' ]

// 6) slice() Method 👇
const sliceRes = arr.slice(1, 3);
console.log(sliceRes); // [ 'Apple', 'HP' ]

// 7) splice() Method 👇
arr.splice(0, 1, "Windows");
console.log(arr); // [ 'Windows', 'Apple', 'HP', 'Lenovo' ]

// 8) indexOf() Method 👇
console.log(arr.indexOf("HP")); // 2

// 9) includes() Method 👇
console.log(arr.includes("Lenovo")); // true

// 10) map() Method 👇
// Example - 01 
const cart = [
    { name: "Ram", price: 200 },
    { name: "Mouse", price: 100 }
];
const calGST = cart.map((item, i) => {
    return { ...item, gst: 18 / 100 * item.price };
    /*
    👆
    ...item is the spread operator
    ...item copies all the key–value pairs from the item object into the new object you’re returning from map().
    */
});
console.log(calGST);
/*
👆
[
  { name: 'Ram', price: 200, gst: 36 },
  { name: 'Mouse', price: 100, gst: 18 }
]
*/
// Example - 02
const nums = [2, 3, 4, 5];
const square = nums.map((item, index) => {
    return item ** 2;
});
console.log(square);  // [ 4, 9, 16, 25 ]

// 11) filter() Method 👇
const studs = [
    { name: "John", age: 20, marks: 30 },
    { name: "Ross", age: 10, marks: 50 },
    { name: "Ethan", age: 50, marks: 75 }
];
// const filterRes = studs.filter(item => item.age > 18); => [ { name: 'John', age: 20 }, { name: 'Ethan', age: 50 } ]
const filterRes = studs.filter(item => item.age > 25 && item.marks > 60);
/*
👆
[ { name: 'Ethan', age: 50, marks: 75 } ]
*/
console.log(filterRes);
/*
const filterRes = studs.filter(item => item.marks < 60);
[
  { name: 'John', age: 20, marks: 30 },
  { name: 'Ross', age: 10, marks: 50 }
]
*/
// Using map() Method on filter() Method 👇
// Example - 01
const combineRes = studs.filter(item => item.age > 25 && item.marks > 60).map(item => item.name);
console.log(combineRes); // [ 'Ethan' ]
// Example - 02
/*
const combineRes1 = cart.map(item => {
    const gst = 18 / 100 * item.price;
    // return { ...item, total: gst + item.price, gst:gst }
    return { ...item, total: gst + item.price, gst }
});
👆
[
  { name: 'Ram', price: 200, total: 236, gst: 36 },
  { name: 'Mouse', price: 100, total: 118, gst: 18 }
]
*/
/*
const combineRes1 = cart.map(item => {
    const gst = 18 / 100 * item.price;
    // return { ...item, total: gst + item.price, gst:gst }
    return { ...item, total: gst + item.price, gst }
}).filter((item) => item.total < 150);
console.log(combineRes1);
👆
[ { name: 'Mouse', price: 100, total: 118, gst: 18 } ]
*/
const combineRes1 = cart.map(item => {
    const gst = 18 / 100 * item.price;
    // return { ...item, total: gst + item.price, gst:gst }
    return { ...item, total: gst + item.price, gst }
}).filter((item) => item.total < 150).map(item => item.name);
console.log(combineRes1); // [ 'Mouse' ]

// 12) find() Method 👇
let num = [2, 3, 4, 89, 34, 23];
const findRes = num.find(item => item > 20);
console.log(findRes);  // 89

// 13) findIndex() Method 👇
const findIndexRes = num.findIndex(item => item > 20);
console.log(findIndexRes); // 3

// 14) sort() Method 👇
const fruits = ["Banana", "Grapes", "Apple", "Pineapple"];
const sortRes = fruits.sort();
console.log(sortRes); // [ 'Apple', 'Banana', 'Grapes', 'Pineapple' ] 

// 15) reduce() Method 👇
const reduceArr = [1, 2, 3, 4, 5];
let sum = 0;
for (let item of reduceArr) {
    sum += item;
}
console.log(sum); // 15
const reduceRes = reduceArr.reduce((sum, item) => item + sum, 0)
console.log(reduceRes);  // 15

// 16) reverse() Method 👇
const reverseArr = ["Apple", "Banana", "Grapes", "Chiku", "Orange"];
const reverseRes = reverseArr.reverse();
console.log(reverseRes); // [ 'Orange', 'Chiku', 'Grapes', 'Banana', 'Apple' ]

// 17) forEach() Method 👇
const fruitNames = ["Banana", "Grapes", "Apple", "Pineapple"];
fruitNames.forEach(item => console.log(item));
/*
👆
Banana
Grapes
Apple
Pineapple
*/

// Some more examples by Akash Sir! 👇
const wishList = [
    { instock: true, product: "Laptop", price: 50000, qty: 1 },
    { instock: true, product: "Mouse", price: 500, qty: 2 },
    { instock: false, product: "Keyboard", price: 1500, qty: 1 }
];
const wishListRes = wishList.filter(item => item.instock === true).map(item => {
    return { ...item, total: item.price * item.qty }
}).reduce((sum, item) => {
    return item.total + sum;
}, 0);
/*
👆
51000
*/
console.log(wishListRes);
/*
const wishListRes = wishList.filter(item => item.instock === true).map(item => {
    return { ...item, total: item.price * item.qty }
});
👆
[
  {
    instock: true,
    product: 'Laptop',
    price: 50000,
    qty: 1,
    total: 50000
  },
  { instock: true, product: 'Mouse', price: 500, qty: 2, total: 1000 }
]
*/
/*
const wishListRes = wishList.filter(item => item.instock === true);
👆
[
  { instock: true, product: 'Laptop', price: 50000, qty: 1 },
  { instock: true, product: 'Mouse', price: 500, qty: 2 }
]
*/ 
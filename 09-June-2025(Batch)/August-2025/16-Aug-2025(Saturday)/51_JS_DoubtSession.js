// Promises => then & catch + async & await 👇
const x = new Promise((resolve, reject) => {
    // resolve("Success!");
    reject("Fail!");
    /*
    Can handle only one resolve or reject!
    */
});
/*
Promise can be handled in two ways:
a) then and catch
b) async and await
*/
x
    .then((succMsg) => console.log(succMsg))  // Used for Resolve Message
    .catch((err) => console.log(err));  // Used for Reject Message

/*
To use async and await we have to write a function and give the Promise inside a variable with await keyword. And it is mandatory that with await keyword we should pass async with the function.
*/
const handleData = async () => {
    /*
    const data = await x; => then of Promise comes here
    console.warn(data);
    */
    /*
    fetch() => Always returns a Promise
    */
    try {
        const data = await x;
        console.warn(data);
    }
    // 👆 try works as then which gives success message.
    catch (error) {
        console.warn(error);
    }
    // 👆 catch gives error message.
    /*
    try and catch is used when we want to print error message inside async and await.
    */
}
handleData();

// -------------------------------------------------------------

// map, filter, reduce 👇
/*
map => Data Transform
filter => Filter's data based on the condition
reduce => Give a single value from the array
*/
const arr = [10, 20, 30];
const resultMap = arr.map(item => item + 5);
console.log(resultMap); // [ 15, 25, 35 ]
const resultFilter = arr.filter(item => item < 25);
console.log(resultFilter); // [ 10, 20 ]
const resultReduce = arr.reduce((sum, item) => item + sum, 40);
// 👆 Sum => Accumulator, 40 => Initial value for the Accumulator
console.log(resultReduce); // 100

// -------------------------------------------------------------

// Primitive and Non - Primitive 👇
/*
Primitive => num, string, boolean, undefined, null
*/
let a = 10; // Ram directly stores the value not the address
let b = a; // Here the value of a is directly stored inside b
b++;
console.log(a) // 10
console.log(b) // 11
/*
Nom - Primitive => array, object, and function
- Engine is written in C++.
- High level language cannot access Address but low level language does.
*/
const arrNum = [10, 20]; // arrNum stores address of the array 
console.log(arrNum); // Prints value at the address => [ 10, 20 ]
const arrNum1 = arrNum; // Stores address of arrNum inside arrNum1
arrNum1.push(30);
console.log(arrNum); // [ 10, 20, 30 ]
// 👆 Gives same value of arrNum1 as output because of same reference  
console.log(arrNum1); // [ 10, 20, 30 ]

// -------------------------------------------------------------

// Spread and Rest Operator 👇
// For Array 👇
const numArr = [10, 20];
// 👇 Right hand side square bracket gets different address => Spread
const numArr1 = [numArr]; // [[10,20]]
const numArrSpread = [...numArr];
// 👆 Gives values of the Array => Spread Operator
const [...numArrRest] = [...numArr];
// 👆 New array is created if ... is on right hand side => Rest Operator
console.log(numArr1); // [ [ 10, 20 ] ]
console.log(numArrSpread); // [ 10, 20 ]
console.log(numArrRest); // [ 10, 20 ]
// For Object 👇
const obj = { name: "Ross", age: 20 };
const { z } = { ...obj };
console.log(z); // undefined
const { ...objRestOperator } = { ...obj };
// 👆 Creates a New Object ...objRestOperator
console.log(objRestOperator); // { name: 'Ross', age: 20 }
const { age, ...remainingObj } = { ...obj };
console.log(remainingObj); // { name: 'Ross' }
console.log(age) // 20
import sayHello, { hello, num, arr, obj } from "./45_ES6_Modules(Export).js";
// "./45_ES6_Modules(Export).js" => File name should end with .js! 
console.log("Hello! We are learning Modules - ES6");
console.log(hello());
console.log(num);
console.log(arr);
console.log(obj);
// console.log(users[1].sub[1]);
console.log(sayHello("Gouri"));

/*
👇
Another way to import all files with a  name which is actually in a form of Object. Then getting all the exported content with objName.exportContentName; 
*/
import * as importAsObj from "./45_ES6_Modules(Export).js";
console.log(importAsObj);
console.log(importAsObj.hello());
/*
importAsObj.sayHello("Gouri")
If sayHello is your default export, then it is not directly available as importAsObj.sayHello.
=> It’s inside importAsObj.default.
- Correct call would be: 
👇
*/
console.log(importAsObj.default("Shreya"));
console.log(importAsObj.num);
console.log(importAsObj.arr);
console.log(importAsObj.obj);
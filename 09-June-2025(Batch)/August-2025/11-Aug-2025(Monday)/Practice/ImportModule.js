import sayHello, { user, obj } from "./ExportModule.js";
console.log(user);
console.log(obj);
console.log(sayHello(user));
import * as importAsObj from "./ExportModule.js";
console.log(importAsObj.user);
console.log(importAsObj.obj);
console.log(importAsObj.default("Gouri"));
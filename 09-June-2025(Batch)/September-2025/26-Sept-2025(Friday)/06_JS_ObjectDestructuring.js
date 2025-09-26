/*
1) What is Object Destructuring?
- Object destructuring is a shorthand syntax in JavaScript that allows you to extract properties from an object and assign them to variables in a cleaner way.
*/
const obj = { name: "Shreya", age: 23, city: "London" }

// Without destructuring 👇
console.log(obj.name) // Shreya
console.log(obj.age) // 23
console.log(obj.city) // London

// With destructuring 👇
const { name, age, city, z } = obj
console.log(name) // Shreya
console.log(age) // 23
console.log(city) // London
console.log(z) // undefined

const useSelector = () => {
    return { user: "Admin", active: true }
}
const { p } = useSelector()
console.log(p) // undefined

stud = { name: "Shreya", age: 23 }
// Renaming of the Variable 👇
const { name: fname } = stud
console.log(fname) // Shreya
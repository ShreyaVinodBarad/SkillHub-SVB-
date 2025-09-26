/*
1) What is Array Destructuring?
- Array destructuring in JavaScript is a way to extract values from arrays and assign them to variables in a clean and concise way.
*/
const arr = [10, 20, 30]
const [a, b, c] = arr
console.log(a) // 10
console.log(b) // 20
console.log(c) // 30

// Skipping Items 👇
const [p, , r] = arr
console.log(p) // 10
console.log(r) // 30

const useSelector = n1 => {
    return [10, 20, n1]
}
[f, g, h] = useSelector(50)
console.log(f) // 10
console.log(g) // 20
console.log(h) // 50

const demo = () => { }
const useState = n1 => [n1, demo]
const [count, setCount] = useState(10)
console.log(count) // 10
console.log(setCount) // [Function: demo]
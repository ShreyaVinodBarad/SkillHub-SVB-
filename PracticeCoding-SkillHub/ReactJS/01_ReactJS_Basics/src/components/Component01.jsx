import React from 'react'

const Component01 = () => {
    const brand = "Dell"
    const age = 23
    const arr = ["Apple", "Banana", "Grapes"]
    const obj = { name: "Shreya", age: "23" }
    const handleClick = () => {
        console.log("Button Clicked!")
    }
    let count = 1
    const inc = () => {
        count++
        console.log(count)
    }
    return (
        <div>
            <h3>{brand}</h3>
            <h3>{age}</h3>
            <h3>{arr}</h3>
            <h3>{obj.name} <br /> {obj.age}</h3>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={inc}>+1</button>
            {
                arr.map(item => <h3>{item}</h3>)
            }
        </div>
    )
}

export default Component01
/*
1) Using Variables in JSX
- You can show (display) variables inside JSX using curly braces {}.
a) Rules:
- You can use any JavaScript variable in JSX using {}.
- Variables should be declared before return().
- You can use them in expressions, like:
<p>Next year age: {age + 1}</p>
----------------------------------------------------------
2) Why Objects Cannot Be Printed Directly in JSX
- React can show only readable values.
- React can directly display strings, numbers, or JSX inside {}.
Example: {name} or {age} works fine.
a) Objects are not directly readable:
- When you write {obj}, React doesn’t know how to show an entire object.
- It gives an error:
“Objects are not valid as a React child”
b) In short:
React can’t directly display objects because they aren’t text.
----------------------------------------------------------
3) map() Function in ReactJS
- We use the map() function to take every value separately from an array and display it in ReactJS.
a) Purpose:
- map() helps to loop through an array and return something for each item (like HTML or JSX).
b) In short:
map() = used to take each value from an array → make elements → show them easily in React JSX.
----------------------------------------------------------
4) Interpolation in ReactJS
- Interpolation means inserting dynamic data (like variables or expressions) inside HTML in React using curly braces {}.
- It helps show JavaScript values directly inside JSX.
a) Important Points:
- Used to display variables, functions, or expressions inside JSX.
- Always written inside {}.
- Works only in JSX.
- You can use math or string expressions too:
<p>{5 + 10}</p>  // Output: 15
b) In short:
Interpolation: {} is used to insert JS values in JSX.
----------------------------------------------------------
5) Why We Don’t Call Functions in JSX
- In JSX, React automatically calls the function component to render the UI.
- You don’t write App() manually.
a) Important Points:
- React automatically executes component functions.
- You use <App /> instead of calling App().
- JSX treats components as custom HTML tags.
b) In short:
No need to call functions — React handles it.
----------------------------------------------------------
*/ 
import React, { useState } from 'react'

const Learn_useState = () => {
    const [count, setCount] = useState(1)
    // setCount => Used to change the value => Function
    let x = 10
    const normalInc = () => {
        x++
        console.log(x)
    } // It increases value in console but not on Screen.
    const stateInc = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Learn useState</h1>
            <h1>{x}</h1>
            <button onClick={normalInc}>+1 Normal</button>
            <h1>{count}</h1>
            <button onClick={stateInc}>+1 State</button>
        </div>
    )
}

export default Learn_useState
/*
1) Hooks in React 
a) Meaning:
Hooks are special functions in React that let you use features like state and lifecycle in functional components (without using classes).
b) Important Points:
- Introduced in React 16.8 – to make functional components more powerful.
- Use only in functional components.
- Always start with “use” (example: useState, useEffect).
- Rules:
1) Must be called at the top of the component.
2) Cannot be used inside loops or conditions.
c) In short: 
Hooks help functional components remember data and react to changes.
---------------------------------------------------------------- 
2) useState in React
a) What it is:
- useState is a React Hook that helps you store and change data inside a component.
b) Why we use it:
- In React, normal variables don’t make the page update when they change.
- But useState variables re-render (refresh) the UI automatically when updated.
c) Syntax:
const [count, setCount] = useState(0);
- count → variable (current value)
- setCount → function to change the value
- 0 → initial value
d) Key Points:
- Comes from React: import { useState } from "react";
- Only works inside functional components
- Changing state with setSomething() makes the UI update automatically
e) In short:
useState = helps React components remember and update data on the screen.
---------------------------------------------------------------- 
*/ 
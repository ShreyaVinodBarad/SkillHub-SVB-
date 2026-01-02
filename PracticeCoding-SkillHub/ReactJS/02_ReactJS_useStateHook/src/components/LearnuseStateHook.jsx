import React from 'react'

const LearnuseStateHook = () => {
    return (
        <div>

        </div>
    )
}

export default LearnuseStateHook
/*
1) Hooks in React
a) Meaning:
- Hooks are special functions in React that let you use features like state and lifecycle in functional components (without using classes).
b) Important Points:
- Introduced in React 16.8 – to make functional components more powerful.
- Use only in functional components.
- Always start with “use” (example: useState, useEffect).
c) Rules:
- Must be called at the top of the component.
- Cannot be used inside loops or conditions.
d) In short:
- Hooks help functional components remember data and react to changes.
----------------------------------------------------------
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
- useState = helps React components remember and update data on the screen.
----------------------------------------------------------
*/ 
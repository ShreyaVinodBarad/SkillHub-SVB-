import React, { useEffect, useState } from 'react'

const LearnuseEffectHooks = () => {
  let [count, setCount] = useState(0)
  const greet = () => console.log("Hello World!")
  // greet()
  {/* 
    👆
    - The function greet() runs every time the component re-renders (like when you click the button and count changes).
    - So, "Hello World!" gets printed again and again in the console.
    - Problem: We only want "Hello World!" to print once — when the component first loads, not on every update.
    - Solution:
    We use useEffect() to control when a function runs.
    */}

  // 👇 Example fix 
  useEffect(() => {
    greet()
  }, [count]) //  [] → run only once, [count] → runs only once once count changes
  return (
    <div>
      <h3 className='alert alert-warning mx-3 mt-3 w-25'>{count}</h3>
      <button type="button" className="btn btn-primary mx-3 mt-3" onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  )
}

export default LearnuseEffectHooks
/*
1) useEffect Hooks(Code Step By Step)
a) What is use of useEffect?
- useEffect is used to run side effects in React components.
- Side effects = code that runs outside the normal UI rendering (e.g. API calls, timers, DOM updates).
- It runs after the component renders.
1) Examples:
- Fetch data from an API
- Set or clear timers
- Update the page title
b) Syntax of useEffect
useEffect(() => {
  // code to run
}, [dependencies])
1) Points:
- The first argument → function (what to do).
- The second argument → dependency array (when to run).
- [] → run only once (on mount).
- [state/prop] → run when that value changes.
- no array → run on every render.
c) Different Dependency Cases
1) No dependency array
- Runs after every render (including state or prop change).
2) Empty dependency array []
- Runs only one time — when the component is first loaded.
3) With specific dependency
- [count] -> Runs only when the value of count changes.
4) In short:
| Dependency | When it runs            |
| ---------- | ----------------------- |
| No array   | Every render            |
| []         | Only once (on mount)    |
| [value]    | When that value changes |
-----------------------------------------------------------------
2) useEffect Mount and Unmount
a) Mount
- When a component is shown (first time loaded) in the browser, it is called mounting.
- useEffect() runs after the component mounts.
- Example: Fetch data, start timer, show message, etc.
useEffect(() => {
  console.log("Component Mounted");
}, []);
- Empty [] means it runs only once when the component loads.
b) Unmount
- When a component is removed or hidden from the screen, it is called unmounting.
- To clean up (like stop timer, remove event, etc.), we use a cleanup function inside useEffect.
- Example:
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
The return part runs before the component unmounts.
c) In Short
| Term    | Meaning              | When useEffect runs         |
| ------- | -------------------- | --------------------------- |
| Mount   | Component appears    | Code inside useEffect       |
| Unmount | Component disappears | Code inside return function |
-----------------------------------------------------------------
*/ 
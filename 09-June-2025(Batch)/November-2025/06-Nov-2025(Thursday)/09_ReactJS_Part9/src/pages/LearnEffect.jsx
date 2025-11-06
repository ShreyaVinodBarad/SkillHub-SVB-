import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [count, setCount] = useState(10)
    const [theme, setTheme] = useState("Light")
    useEffect(() => {
        console.log("Hello React")
    }, [theme])
    // 👆 Dependancy Array
    return (
        <div>
            <h1 className='alert alert-danger text-center mt-3 mx-3 w-25'>{count}</h1>
            <button onClick={() => setCount(count + 1)} type="button" class="btn btn-primary w-25 mx-3">+1</button>
            <h1 className='alert alert-danger text-center mt-3 mx-3 w-25'>{theme}</h1>
            <button type="button" class="btn btn-primary w-25 mx-3" onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>Toggle</button>
        </div>
    )
}

export default LearnEffect
/*
1) Why “Hello React” prints two times:
- When you run this in development mode, React (v18 and above) automatically wraps your app inside something called:
<React.StrictMode>
- This is done only in development, not in production.
-------------------------------------------------------------------
2) Why “Hello React” prints twice:
- In React, there is a special mode called StrictMode.
- It is used only while developing (not in final build).
- React uses it to double-check your code — to see if everything is safe and written correctly.
- So what happens is:
a) React runs your component one time → it prints “Hello React”.
b) Then React runs it one more time (just for testing) → it prints “Hello React” again.
- That’s why you see:
Hello React
Hello React
- Simple meaning:
a) StrictMode = React’s safety checker.
b) It runs some parts of your code twice (only while coding) to catch mistakes early.
c) In the final version of your app, it will print only once.
-------------------------------------------------------------------
3) Important Points:
- This happens only in development mode.
- In production build (npm run build), useEffect() will run only once, as expected.
- This behavior helps React detect unsafe code but doesn’t affect your real app.
-------------------------------------------------------------------
4) If you want to see it run only once (for testing):
- You can remove the <React.StrictMode> wrapper in main.jsx (or index.js) file like this 👇
❌ Before:
<React.StrictMode>
  <App />
</React.StrictMode>
✅ After:
<App />
- Now “Hello React” will print only once.
-------------------------------------------------------------------
5) useEffect:
1) Meaning:
- useEffect is a React Hook used to run side effects in a component.
(Side effects = tasks that happen outside React, like fetching data, updating the DOM, or using setTimeout.)
2) Important Points:
a) Syntax:
useEffect(() => {
  // code to run
}, [dependencies])

b) Runs after render:
- It runs after the component is rendered on the screen.

c) Dependency array ([]):
[] → Runs only once (like componentDidMount).
[a, b] → Runs when a or b changes.
No [] → Runs after every render.

d) Common uses:
- Fetch data from API
- Set or clear timers
- Work with localStorage
- Add/remove event listeners
3) In short:
- useEffect lets your component do something after rendering — like talking to the outside world or cleaning up before it disappears.
-------------------------------------------------------------------
*/ 
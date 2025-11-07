import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    const [theme, setTheme] = useState("Light")
    const [count, setCount] = useState(0)
    // console.log("Hello World!")
    useEffect(() => {
        // 👇 Page Mount + Change in Dependancy Array (Priority - 02)
        console.log("Component Mounted")
        return () => {
            // 👇 Cleanup Function + Change in Dependancy Array (Priority - 01 => First runs)
            console.log("Cleanup Function + Component UnMounted") // 👈 Page Unmounts
        }
    }, [count])
    /*
    👆
    You’ll see “Hello World” twice in console because:
    a) React mounts → runs useEffect (1st time)
    b) React unmounts & re-mounts again (for checking) → useEffect runs again (2nd time)
    */
    return (
        <div>
            <h3 className='alert alert-primary mx-3 my-3 text-center'>
                LearnEffect Page
            </h3>
            <h4 className='alert alert-warning mx-3 mt-3 w-25'>{theme}</h4>
            <h4 className='alert alert-warning mx-3 mt-3 w-25'>{count}</h4>
            <button type="button" class="btn btn-primary w-25 mx-3 mt-3" onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
                Toggle
            </button>
            <button type="button" class="btn btn-primary w-25 mx-3 mt-3" onClick={() => setCount(count === 5 ? 5 : count + 1)}>
                +1
            </button>
        </div>
    )
}

export default LearnEffect
/*
1) When file re-renders in React:
a) React does two renders (in development mode with StrictMode):
=> First render: React checks your component logic (runs internally).
=? Second render: React actually prints the output (UI) on screen.
- This happens only in development mode — not in production.
b) Important Points:
- Happens only in development with StrictMode.
- Helps React find unsafe side effects.
- In production, it runs only once (as expected).
c) In short:
- React runs components twice (1st for testing, 2nd for showing) → so useEffect() also runs twice in development.
---------------------------------------------------------------
2) Mount and Unmount in ReactJS
a) Mount (When component starts showing on screen)
- Meaning: Mounting means adding a component to the web page for the first time.
- It happens when React creates the component and inserts it into the DOM (browser screen).
- Example: When you open a page and a component (like Navbar or Home page) appears — it’s mounted.
1) Important Points:
- It happens only once when the component is first rendered.
b) Unmount (When component is removed from screen)
- Meaning: Unmounting means removing a component from the web page (DOM).
- Happens when user navigates away or component is destroyed.
c) In Short:
- Mount = Component added to page
- Unmount = Component removed from page
- Both are handled using useEffect() in React.
---------------------------------------------------------------
*/ 
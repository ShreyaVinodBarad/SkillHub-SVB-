import React, { useEffect, useState } from 'react'

const LearnEffect = () => {
    // 👇 Preserve the value in Re-Render
    const [theme, setTheme] = useState("dark")
    const [count, setCount] = useState(0)
    useEffect(() => {
        // 👇 Mount and change in dependancy array variable 2 -> print
        console.log("Effect")
        // 👇 When unmount change page and change in dependancy array variable 1 -> print
        return () => {
            console.log("CleanUp")
        }
    }, [count])
    return (
        <div>
            <h1>
                {theme}
            </h1>
            <button type="button" class="btn btn-primary" onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}>
                Toggle
            </button>
            <h1>{count}</h1>
            <button type="button" class="btn btn-primary" onClick={() => setCount(prev => prev + 1)}>
                State +1
            </button>
        </div>
    )
}

export default LearnEffect
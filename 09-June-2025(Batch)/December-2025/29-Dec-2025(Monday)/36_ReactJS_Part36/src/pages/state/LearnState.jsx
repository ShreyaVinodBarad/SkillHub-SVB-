import React, { useState } from 'react'

const LearnState = () => {
    let x = 10

    const [count, setCount] = useState(10)
    const [user, setUser] = useState({ name: "John", age: 20 })
    const [skills, setSkills] = useState(["ReactJS", "Redux"])

    // 👇 Only the console value increases, UI stays the same.
    const handleInc = () => {
        x++
        console.log(x)
    }

    const handleStateInc = () => {
        /*
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
        */
        /*
        👆
        a) UI increases by only 1
        console.log prints old value
        b) Example (initial count = 10):
        UI → 11
        Console → 10
        c) Why this happens
        - React batches state updates
        - setCount is asynchronous: It means setCount does NOT update the state immediately.
        - Both updates use the same old value (count = 10)
        - React sees:
        setCount(11)
        setCount(11)
        - Only one update is applied
        */
        /*
        📌 React Batch Update is the process where React groups multiple state updates into a single re-render to improve performance.
        */

        // 👇 Want to make changes on updated values than use this syntax. 
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        console.log(count)
        // 👆 First, runs this code so prints 10 in the console
        /*
        👆
        a) React batches both updates
        - Each update uses the latest previous state
        - UI increases by 2
        - console.log(count) prints the old value (before re-render)
        - Example (count = 10):
        UI → 12
        Console → 10
        */
    }

    return (
        <div>
            <h1>{x}</h1>
            <button type="button" class="btn btn-primary" onClick={handleInc}>
                +1
            </button>
            {/* 
            👆
            What happens step-by-step:
            a) x is a normal variable, not React state
            b) Clicking the button:
            - x++ increases the value
            - console.log(x) shows updated value
            c) React does NOT re-render
            d) <h1>{x}</h1> always shows 10
            */}

            <h1>{count}</h1>
            <button type="button" class="btn btn-primary" onClick={handleStateInc}>
                State +1
            </button>

            <h1>{JSON.stringify(user)}</h1>
            <button type="button" class="btn btn-primary" onClick={() => setUser({ ...user, name: "Ethan" })}>
                Update User
            </button>

            <button type="button" class="btn btn-primary" onClick={() => setUser(pre => { return { ...pre, name: "Ross" } })}>
                Update User with Callback
            </button>
            {/* 
            👆
            - Both buttons update the user’s name
            - First uses current state
            - Second uses previous state (recommended way)
            */}


            <pre>{JSON.stringify(skills)}</pre>
            <button type="button" class="btn btn-primary" onClick={() => setSkills([...skills, "JavaScript"])}>
                Push Skill
            </button>
            <button type="button" class="btn btn-primary" onClick={() => setSkills(prev => [...prev, "NodeJS"])}>
                Push Skill with Callback
            </button>

            {/* 
            1) prev
            - Because React updates state asynchronously, so prev guarantees you get the most recent value. Asynchronous state update means React updates state later, not instantly — and prev helps you safely use the latest state.
            a) With prev (correct)
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
            👉 Result: count increases by 2
            b) setUser(prev => ({ ...prev, name: "Ross" })
            👉 This means:
            “Take the latest user data
            Keep everything the same
            Just change the name”       
            c) prev = most recent state
            */}
        </div>
    )
}

export default LearnState
import React, { useState } from 'react'

const UsinguseStateForInputField = () => {
    let str = "Hello!"

    const [name, setName] = useState("")
    return (
        <div>
            <h1>{str}</h1>
            <h1>{name}</h1>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
            // event.target.value = what the user typed 👆
            />
        </div>
    )
}

export default UsinguseStateForInputField
/*
1) onChange: 
- onChange is an event handler in ReactJS that runs a function whenever
the value of an input changes (like typing in a textbox or selecting
an option).
- onChange is used to know when the user changes something in an input field like:
a) typing in a textbox
b) selecting from a dropdown
c) checking a checkbox
👉 Simply: It runs a function whenever the input value changes.
- onChange is an event that runs a function whenever the input value changes.
---------------------------------------------------------
*/ 
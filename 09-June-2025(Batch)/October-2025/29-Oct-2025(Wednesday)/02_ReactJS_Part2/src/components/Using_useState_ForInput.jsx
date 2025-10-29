import React, { useState } from 'react'

const Using_useState_ForInput = () => {
    const [name, setName] = useState("Hello ReactJS!")
    let str = "Hello"
    const handleClick = () => { }
    const handleInput = event => { setName(event.target.value) }
    // 👆 Here, event is an object which has target inside the object and inside it has value which as the data entered in the input 
    return (
        <div>
            <h2>{str}</h2>
            <h2>{name}</h2>
            <input type="text" onChange={handleInput} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Using_useState_ForInput
/*
1) onChange in ReactJS
a) Meaning:
onChange is an event handler in ReactJS that runs a function whenever the value of an input changes (like typing in a textbox or selecting an option).
b) Important Points:
- Used mostly with form elements (input, textarea, select).
- Helps to track and update user input in real-time.
- Works with state to store and show current values.
- Syntax: onChange={functionName}
c) In short:
onChange helps React know when the user types or changes something, so we can update the UI or state instantly.
----------------------------------------------------------------
*/ 
import React, { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState("")
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    const reset = () => {
        setNum1("")
        setNum2("")
    }
    return (
        <div>
            <h1>{result}</h1>
            <input
                type="text"
                onChange={event => setNum1(event.target.value)}
                value={num1}
            />
            <input
                type="text"
                onChange={event => setNum2(event.target.value)}
                value={num2}
            />
            <button onClick={() => { setResult(+num1 + +num2); reset() }}>
                +
            </button>
            <button onClick={() => { setResult(+num1 - +num2); reset() }}>
                -
            </button>
            <button onClick={() => { setResult(+num1 * +num2); reset() }}>
                x
            </button>
            <button onClick={() => { setResult(+num1 / +num2); reset() }}>
                /
            </button>
        </div >
    )
}

export default Calculator
/*
1) Why it gives NaN after clicking “-” in Calculator
- When you type numbers in the input boxes, num1 and num2 are normal
variables, not state variables -> let num1, num2
- So, when React re-renders after showing the result, those variables
(num1, num2) become empty (undefined) again.
- That’s why on the next button click (like “–”), React tries to do
math with undefined, and undefined - undefined = NaN.
- In short:
num1 and num2 get reset after re-render because they’re not in state
→ React loses their values → gives NaN.
- In short:
Re-render = React refreshes your component to show updated data.
---------------------------------------------------------
*/ 
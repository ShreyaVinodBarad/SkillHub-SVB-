import React, { useState } from 'react'

// First letter captial is known as Component 
const Calculator = () => {
    let [result, setResult] = useState(0)
    // 👆 useState has an array which has first index of a variable with vlaue undefined and a function at its 1st index.
    let num1
    let num2
    return (
        <div>
            <h1>Calculator</h1>
            <h1>{result}</h1>
            <input type="text" onChange={event => num1 = event.target.value} />
            <br />
            <br />
            <input type="text" onChange={event => num2 = event.target.value} />
            <br />
            <br />
            <button onClick={() => setResult(+num1 + +num2)}>+</button>
            <button onClick={() => setResult(+num1 - +num2)}>-</button>
            <button onClick={() => setResult(+num1 * +num2)}>*</button>
            <button onClick={() => setResult(+num1 / +num2)}>/</button>
        </div>
    )
}

export default Calculator
/*
1) Why it gives NaN after clicking “-” in Calculator
- When you type numbers in the input boxes, num1 and num2 are normal variables, not state variables.
- So, when React re-renders after showing the result, those variables (num1, num2) become empty (undefined) again.
- That’s why on the next button click (like “–”), React tries to do math with undefined, and undefined - undefined = NaN.
- In short:
num1 and num2 get reset after re-render because they’re not in state → React loses their values → gives NaN.
- In short:
Re-render = React refreshes your component to show updated data.
---------------------------------------------------------------- 
*/ 
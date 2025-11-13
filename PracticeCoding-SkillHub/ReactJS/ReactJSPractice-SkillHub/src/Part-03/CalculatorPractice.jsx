import React, { useState } from 'react'

const CalculatorPractice = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")
    const reset = () => {
        setNum1("")
        setNum2("")
        setResult("")
    }
    return (
        <div>
            <input type="number" onChange={event => setNum1(event.target.value)} value={num1} />
            <input type="number" onChange={event => setNum2(event.target.value)} value={num2} />
            <button onClick={() => setResult(+num1 + +num2)}>+</button>
            <button onClick={() => setResult(+num1 - +num2)}>-</button>
            <button onClick={() => setResult(+num1 * +num2)}>*</button>
            <button onClick={() => setResult(+num1 / +num2)}>/</button>
            <button onClick={reset}>Reset</button>
            {/* 👆 Clicking Reset updates the state → React re-renders → inputs and result become empty. */}
            <h4>{result}</h4>
        </div>
    )
}

export default CalculatorPractice
import React, { useState } from 'react'

const StatePractice = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count === 5 ? 5 : count + 1)}
            >
                +1
            </button>
            <button
                onClick={() => setCount(count === 0 ? 0 : count - 1)}
            >
                -1
            </button>
        </div>
    )
}

export default StatePractice
/*
❌ No, you should NOT use count++ or count-- in React state updates.
✅ You should use count + 1 or count - 1.
1) count is NOT a normal variable
- In React:
const [count, setCount] = useState(0)
a) count is read-only
b) React controls it
- You are not allowed to change it directly
❌ This is wrong:
count++
count--
- Because this tries to directly modify count, which React does not allow.
2) count++ does NOT return the updated value This is the biggest reason 
- What happens with count++?
count++
a) First, it returns the old value
b) Then it increases count internally
- Example:
let x = 5
console.log(x++) // prints 5, not 6
- So if you write:
setCount(count++)
- React receives the old value, not the increased one ❌
- So the UI may not update correctly
3) React state must be updated using setCount
- React only re-renders when you use the setter function.
- Correct way:
setCount(count + 1)
setCount(count - 1)
- Here:
a) You are not modifying count
b) You are sending a new value to React
- React understands → “State changed” → re-render happens
---------------------------------------------------------------
*/ 
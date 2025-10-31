import React, { useState } from 'react'

const StatePractice = () => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count === 5 ? 5 : count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count === 0 ? 0 : count - 1)}>
                -1
            </button>
            {/* 
            👆
            We can't use count++, because it actually means count = count + 1. Which basically changes count variable, which is not valid.
            */}
        </div>
    )
}

export default StatePractice
import React, { useState } from 'react'
import Test from './Test'

const LearnOnlyMemo = () => {
    const [brand, setBrand] = useState("dell")
    const [count, setCount] = useState(10)
    return (
        <div>
            <h1>{count}</h1>
            <button type="button" class="btn btn-primary" onClick={() => setCount(pre => pre + 1)}>+1</button>
            <button type="button" class="btn btn-primary" onClick={() => setBrand(pre => pre === "dell" ? "apple" : "dell")}>Brand Change</button>
            <hr />
            <Test brand={brand}></Test>
        </div>

    )
}

export default LearnOnlyMemo
// useCallback
// useMemo
// memo function

// 👇 Tomorrow Topics
// useRef
// useReducer

// 👇 Next Topics
// Lazy Loading
// Error Boundry
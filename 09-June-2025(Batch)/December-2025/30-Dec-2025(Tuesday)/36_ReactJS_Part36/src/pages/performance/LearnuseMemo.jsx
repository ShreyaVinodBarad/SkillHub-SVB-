import React, { useCallback, useMemo, useState } from 'react'

const LearnuseMemo = () => {
    const [count, setCount] = useState(10)
    const [theme, setTheme] = useState("dark")
    // console.log("Hello!")
    const sum = () => {
        let total = 0
        for (let i = 0; i < 10; i++) {
            total += i
        }
        return total
    }

    // const x = useCallback(sum,[])
    // console.log(x)
    // 👆 cache/memoize: Entire Function
    
    const y = useMemo(sum,[theme])
    console.log(y)
    // 👆 cache/memoize: Function Return Value

    return (
        <>
            <div>{count}</div>
            {/* <div>{sum()}</div> */}
            <h1>{y}</h1>
            <button type="button" class="btn btn-primary" onClick={() => setCount(pre => pre + 1)}>+1</button>
            <h1>{theme}</h1>
            <button type="button" class="btn btn-primary" onClick={()=>setTheme(pre=>pre ==="dark"?"light":"dark")}>toggle</button>
        </>
    )
}

export default LearnuseMemo
/*
Variables are hold in RAM, when button is clicked the code in deleted and created.
*/ 
// useCallback => Does not delete the function keep that as it is => Memo/Cache 
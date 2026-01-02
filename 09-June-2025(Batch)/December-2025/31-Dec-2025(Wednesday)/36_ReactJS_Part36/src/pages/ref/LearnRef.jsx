import React, { useEffect, useRef, useState } from 'react'

const LearnRef = () => {

    const [fname, setFname] = useState()

    const x = useRef() // DOM access, avoid rerender
    // console.log(x)
    useEffect(() => {
        console.log(x.current)
    }, [])

    console.log("Re-Render")
    // ref avoids re-render and improves performance

    const handleSubmit = () => {
        console.log(x.current.value)
        console.log(fname) // Change in state variable leads to re - render
    }

    // formik => State
    // react-hook-form => ref
    return (
        <div>
            <input type="text" ref={x} />
            <input type="text" onChange={e => setFname(e.target.value)} />
            <button onClick={handleSubmit}>Click</button>
        </div>
    )
}

export default LearnRef
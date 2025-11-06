import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let [count, setCount] = useState(0)
    const navigate = useNavigate()
    return (
        <div>
            <h2 className="alert alert-primary text-center mt-3">Home Page</h2>
            <h3 className='alert alert-warning w-25 text-center mt-3 mx-3'>{count}</h3>
            <button type="button" class="btn btn-primary mx-3 w-25" onClick={
                () => count === 8 ? navigate("/about") : setCount(count + 1)
            }><h3>+1</h3> </button>
        </div >
    )
}

export default Home
/*
1) useNavigate:
- useNavigate (from react-router-dom) is a hook used to move between pages in React apps.
- In short and easy words:
useNavigate() gives you a function (called navigate) that helps you change pages without reloading.
- You can call it like: navigate("/about") to go to the About page.
--------------------------------------------------------------------
*/ 
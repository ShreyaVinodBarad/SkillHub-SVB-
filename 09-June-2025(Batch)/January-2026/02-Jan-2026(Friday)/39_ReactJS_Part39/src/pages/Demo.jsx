import React, { useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState(10)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(pre => pre === 15 ? {} : pre + 1)} type="button" class="btn btn-primary">
                +1
            </button>
            {/* 📌 Error was in Demo but NavBar component got closed. So, if there is error in Demo than that component should be closed but not other component. Like try-catch error boundary gives error but does not crash the app. */}
        </div>
    )
}

export default Demo
import React, { useState } from 'react'

const StatePractice = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" onClick={() => count === 5 ? 5 : setCount(count + 1)}>
                    +1
                </button>
                <button type="button" class="btn btn-warning">
                    {count}
                </button>
                <button type="button" class="btn btn-primary" onClick={() => count === 0 ? 0 : setCount(count - 1)}>
                    -1
                </button>
            </div>
        </div>
    )
}

export default StatePractice
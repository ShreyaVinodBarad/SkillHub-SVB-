import React, { useState } from 'react'

const Card01 = () => {
    const [count, setCount] = useState(10)
    return (
        <div>
            <div class="card">
                <div class="card-header">Card - 01</div>
                <div class="card-body">
                    <h1>{count}</h1>
                    <button type="button" class="btn btn-primary" onClick={() => setCount({})}>
                        Create Error
                    </button>
                </div>
                <div class="card-footer">This is Card Footer</div>
            </div>
        </div>
    )
}

export default Card01
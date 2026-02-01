import React from 'react'

const ChildComponent = ({ count, brand }) => {
    return (
        <div>
            <h1>
                Child Component
            </h1>
            <h2>{count}</h2>
        </div>
    )
}

export default ChildComponent
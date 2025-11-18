import React from 'react'

const PropsDrilling = ({ brand }) => {
    const user = "Shreya"
    return (
        <div>
            <Child user={user} brand={brand} />
        </div>
    )
}

const Child = ({ user, brand }) => {
    return (
        <div>
            <h6>Child</h6>
            <Grandchild user={user} brand={brand} />
        </div>
    )
}

const Grandchild = ({ user, brand }) => {
    return (
        <div>
            <h6>GrandChild</h6>
            <h1>Props Drilling: {user}</h1>
            <h1>Props Drilling(App): {brand}</h1>
        </div>
    )
}


export default PropsDrilling
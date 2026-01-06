import React from 'react'

const LearnPropsDrilling = () => {
    const admin = "Shreya"
    const age = 22
    return (
        <div>
            <h1>Props Drilling</h1>
            <Parent admin={admin} age={age}></Parent>
        </div>
    )
}

const Parent = ({ admin, age }) => {
    return (
        <div>
            <h1>Parent</h1>
            <Child admin={admin} age={age}></Child>
        </div>
    )
}

const Child = ({ admin, age }) => {
    return (
        <div>
            <h1>Child</h1>
            <GrandChild admin={admin} age={age}></GrandChild>
        </div>
    )
}

const GrandChild = ({ admin, age }) => {
    return (
        <div>
            <h1>GrandChild</h1>
            <h2>{admin}</h2>
            <h2>{age}</h2>
        </div>
    )
}

export default LearnPropsDrilling
/*
1) Props Drilling:
a) When we pass data from a top (parent) component to a deep child
component through many middle components, it’s called props drilling.
b) Example:
Parent → Child → Grandchild → GreatGrandchild (data passed step by
step)
c) Main Points:
- Used when a deep component needs data from the top.
- Middle components just pass props — they don’t use them.
- It makes code hard to manage when the app grows.
- Solution: Use Context API or Redux to avoid props drilling.
d) In short:
Passing props through many layers = props drilling problem.
*/
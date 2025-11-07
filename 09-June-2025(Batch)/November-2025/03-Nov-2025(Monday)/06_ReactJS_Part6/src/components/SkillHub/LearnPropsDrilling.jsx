import React from 'react'

const LearnPropsDrilling = () => {
    const admin = "Sony Barad"
    const age = 23
    return (
        <div>
            <h3>Props Drilling</h3>
            <Parent data={admin} age={age}></Parent>
        </div>
    )
}
const Parent = ({ data, age }) => {
    return (
        <div>
            <h3>Parent</h3>
            <Child data1={data} age={age}></Child>
        </div>
    )
}
const Child = ({ data1, age }) => {
    return (
        <div>
            <h3>Child</h3>
            <GrandChild data2={data1} age={age}></GrandChild>
        </div>
    )
}
const GrandChild = ({ data2, age }) => {
    return (
        <div>
            <h3>GrandChild: {data2} {age}</h3>
        </div>
    )
}

export default LearnPropsDrilling
/*
1) Props Drilling: 
a) When we pass data from a top (parent) component to a deep child component through many middle components, it’s called props drilling.
b) Example:
Parent → Child → Grandchild → GreatGrandchild (data passed step by step)
c) Main Points:
- Used when a deep component needs data from the top.
- Middle components just pass props — they don’t use them.
- It makes code hard to manage when the app grows.
- Solution: Use Context API or Redux to avoid props drilling.
d) In short:
Passing props through many layers = props drilling problem.
*/ 
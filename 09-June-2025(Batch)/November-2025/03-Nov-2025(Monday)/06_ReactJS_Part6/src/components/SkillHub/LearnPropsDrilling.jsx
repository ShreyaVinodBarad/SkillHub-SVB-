import React from 'react'

const LearnPropsDrilling = () => {
    return (
        <div>

        </div>
    )
}
const Parent = () => { }
const Child = () => { }
const GrandChild = () => { }

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
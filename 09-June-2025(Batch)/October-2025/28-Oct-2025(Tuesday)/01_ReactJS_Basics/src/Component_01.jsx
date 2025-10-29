import React from 'react'

const Component_01 = () => {
    const brand = "Dell"
    const age = 23
    const arr = ["HTML", "CSS", "JS"]
    const obj = { name: "Ross", city: "London" }
    const handleClick = () => {
        console.log("Shreya!")
    }
    let count = 1
    const inc = () => {
        count++
        console.log(count)
    }
    return (
        <div>
            <h3>{brand}</h3>
            <h3>{age}</h3>
            <h3>{arr}</h3>
            <h3>{obj.name}<br />{obj.city}</h3>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={inc}>+1</button>
            <hr />
            {/* We can use this method to print all values of array seperatly 👇 */}
            {
                arr.map(item => <h3>{item}</h3>)
            }
        </div>
    )
}

export default Component_01
import React from 'react'

const Component01 = () => {
    const name = "Shreya Barad"
    const age = 23
    const brand = ["Dell", "Apple", "Samsung"]
    const studData = { name: "Shreya", age: 23 }
    let count = 1
    const inc = () => {
        count++
        console.log(count)
    }
    return (
        <div>
            <h4>{name}</h4>
            <h4>{age}</h4>
            <h4>{brand}</h4>
            {
                brand.map(item => {
                    return <h4>{item}</h4>
                })
            }
            <h4>{studData.name}{studData.age}</h4>
            <button onClick={inc}>+1</button>
        </div>
    )
}

export default Component01
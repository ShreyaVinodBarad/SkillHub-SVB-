import React from 'react'

const LearnBasics = () => {
    const name = "Shreya"
    const brands = ["Dell", "Apple", "Samsung"]
    const user = { name: "John", age: 23 }
    const sayHello = () => console.log("Hello World!")
    return (
        <div>
            <h2>LearnBasics</h2>
            <h4>{name}</h4>
            <h4>{brands}</h4>
            <h4>Name: {user.name} and Age: {user.age}</h4>
            <button onClick={sayHello}>Click Me</button>
        </div>
    )
}

export default LearnBasics
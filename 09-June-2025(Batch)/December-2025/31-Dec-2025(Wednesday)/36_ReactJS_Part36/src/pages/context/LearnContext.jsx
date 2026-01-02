import React, { createContext, useContext } from 'react'

const BrandContext = createContext()
const LearnContext = () => {
    const user = { name: "Ross", age: 20 }
    const brand = "dell"
    return (
        <BrandContext.Provider value={brand}>
            <div>LearnContext</div>
            <Child user={user}>
                <h1>Hello!</h1>
            </Child>
        </BrandContext.Provider>
    )
}
const Child = ({ user, children }) => {
    return <>
        <div>Child</div>
        {children}
        <GrandChild user={user}></GrandChild>
    </>
}
const GrandChild = ({ user }) => {
    const x = useContext(BrandContext)
    return <>
        <div>GrandChild</div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>Brand: {x}</h1>
    </>
}

export default LearnContext
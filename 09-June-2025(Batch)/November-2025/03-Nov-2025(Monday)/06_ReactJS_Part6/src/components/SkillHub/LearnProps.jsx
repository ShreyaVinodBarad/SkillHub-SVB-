import React from 'react'

// const LearnProps = (props) => { => Direct Object
const LearnProps = ({ name, age }) => { // => Object Destructuring
  return (
    <div>
      {/* <h2>{props.name}</h2> => Using Direct Object */}
      {/* <h2>{props.age}</h2> => Using Direct Object*/}
      {/* 
      👆
      In ReactJS, you can’t directly print an object inside JSX because React doesn’t know how to show an object as text.
      */}
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  )
}

export default LearnProps
/*
1) In ReactJS, when you pass props to a component, they are always received as an object.
-----------------------------------------------------------------
2) Props:
a) Props in ReactJS are like function arguments — they are used to pass data from one component (usually a parent) to another (usually a child).
b) In simple words:
Props help you send information to a component so it can display or use it.
c) Example:
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Shreya" />;
}
- Explanation:
=> name="Shreya" → This is a prop sent to the Welcome component.
=> Inside Welcome, we access it as props.name.
=> Output → Hello, Shreya!
d) Key Points:
- Props are read-only (you can’t change them inside the child component).
- They make components reusable and dynamic.
- You can pass any type of data — text, numbers, arrays, objects, or even functions.
----------------------------------------------------------------
*/ 
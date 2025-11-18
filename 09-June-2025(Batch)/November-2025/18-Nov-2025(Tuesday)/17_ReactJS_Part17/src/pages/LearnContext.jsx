import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { TestContext } from '../App'

const UserContext = createContext()

const LearnContext = () => {
    const user = "Shreya Barad"
    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}
const Child = () => {
    return (
        <div>
            <h6>Child</h6>
            <Grandchild />
        </div>
    )
}

const Grandchild = () => {
    const x = useContext(UserContext)
    // 👆 useContext is returning the value passed in value attribute UserContext
    const y = useContext(TestContext)
    // 👆 Will return value prop of TestContext.Provider
    return (
        <div>
            <h6>GrandChild</h6>
            <h1>{x}</h1>
            <h1>{y}</h1>
        </div>
    )
}
export default LearnContext
/*
1) Context:
a) What is Context in React?
- Context is a way to share data between components without passing props manually again and again.
b) Why do we use it?
- Because sometimes we need one value (like theme, user data, language, cart items, etc.) in many components.
- Passing props through each level becomes annoying — this is called prop drilling.
- Context helps avoid that.
c) How it works:
- Create Context → like making a storage.
- Provide Context → wrap components that need the data.
- Use/Consume Context → get the data in any component easily.
d) One-line definition:
- Context provides a global data store that any component can access without props.
--------------------------------------------------------------
2) How to use context?
a) Create Context
import { createContext } from "react";
export const UserContext = createContext();
b) Provide Context (wrap your components)

import React, { useState } from "react";
import { UserContext } from "./UserContext";
const App = () => {
  const [user, setUser] = useState("Shreya");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
};
export default App;
- Meaning:
We are giving (providing) user data to all components inside <UserContext.Provider>.
c) Use Context (get the data)
- Any child component can receive the values without props.
import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>User Name: {user}</h2>
      <button onClick={() => setUser("Akash")}>Change Name</button>
    </div>
  );
};
export default Home;
d) Summary:
- createContext() → makes a storage box.
- Provider → gives the data to components.
- useContext() → takes the data from the box.
--------------------------------------------------------------
*/ 
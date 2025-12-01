// const { createStore } = require("redux")
// 👆 ES5 Syntax

import { createStore } from "redux"
/*
👆
Able to use import by adding a line in package.json:
"type": "module" after "license": "ISC"
*/

// 👇 Reducer => is a simply Function
// const rootReducer = (state, action) => {
// 👆 And in action, it has this { type: "DEPOSIT", payload: 500 } object.
// 👆 Here Action name is DEPOSIT.
const rootReducer = (state = { balance: 100 }, { type, payload }) => {
    // 👆 Object destructuring 
    /*
    state = { balance: 500 }
    👆
    Initial balance of the state is 100
    */
    /*
    👆
    - A Reducer is just a function
    - It receives:
    a) current state
    b) an action { type, payload }
    - Here initial state is:
    { balance: 100 }
    */

    if (type === "DEPOSIT") {
        // state.balance += payload
        // 👆 We can't change directly we have to change using return with an object
        return { balance: state.balance + payload }
    } if (type === "WITHDRAW") {
        // state.balance -= payload
        return { balance: state.balance - payload }
    }
    /*
    👆
    => Handling Actions
    - If someone does DEPOSIT → increase balance
    - If someone does WITHDRAW → decrease balance
    - Reducer must return a NEW object (can't modify directly)
    */
    return state
}

// 👇 Store
const store = createStore(rootReducer)
// 👆 Now stores manager is rootReducer.
/*
👆
=> Creating Store
- store is like a data manager
- It knows:
a) The current state
b) The reducer that will update the state
*/

// 👇 getState => Returns data in store
console.log("Initial: ", store.getState())
/*
👆
=> Get Initial State
Output:
Initial:  { balance: 100 }
*/

// 👇 Action
store.dispatch({ type: "DEPOSIT", payload: 500 })
// 👆 Here in dispatch we always pass an Object with fixed keys type and payload.
console.log("After: ", store.getState())
/*
👆
- Reducer calculates:
100 + 500 = 600
- Output:
After: { balance: 600 }
*/

store.dispatch({ type: "WITHDRAW", payload: 600 })
console.log("After: ", store.getState())
/*
👆
- Reducer calculates:
600 - 600 = 0
- Output:
After: { balance: 0 }
*/

/*
- FINAL OUTPUT FLOW
Initial:  { balance: 100 }
After Deposit: { balance: 600 }
After Withdraw: { balance: 0 }
*/

/*
=> Conclusion
- Redux flow in simple words:
a) Store → holds data
b) Reducer → changes data based on actions
c) Dispatch → send an action to reducer
d) getState → see updated data
*/

/*
Ways of writing Redux: 
1) Legacy
2) Toolkit
3) Toolkit + RTK
*/

/*
1) STEP 1 — Initialize Project & Install Redux
npm init -y
- Creates a new Node project with a default package.json
npm i redux
- Installs Redux library
--------------------------------------------------------------
2) STEP 2 — Run the App
node app.js
- Executes your JavaScript file
--------------------------------------------------------------
3) STEP 3 — Importing createStore
import { createStore } from "redux"
- Normally Node uses require(), but you want to use import.
- So you added this in package.json:
"type": "module"
- This tells Node: "I will use ES6 import/export syntax"
--------------------------------------------------------------
*/ 
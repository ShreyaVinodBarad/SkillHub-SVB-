// 👇 Reducer
import { createStore } from "redux"

// const bankReducer = (state, actions) => { } => Destructuring of action 👇
const bankReducer = (state = { balance: 0 }, { type, payload }) => {
    /*
    => Store Setup
    - You created a Redux store which holds a global state.
    - The state has one value: balance.
    - This reducer updates the balance based on actions like DEPOSIT or WITHDRAW.
    */
    if (type === "DEPOSIT") {
        return { balance: state.balance + payload }
    }
    if (type === "WITHDRAW") {
        return { balance: state.balance - payload }
    }
    return state
    // 👆 To not make initial value of state - undefined
}

// 👇 Store
export const reduxStore = createStore(bankReducer)

// 👇 Actions
// reduxStore.dispatch({ type: "DEPOSIT", payload: 100 })

// 👇 If we want to call this on a button click, then wrap it inside a function.
export const inc = amt => {
    // reduxStore.dispatch({ type: "DEPOSIT", payload: 100 })
    reduxStore.dispatch({ type: "DEPOSIT", payload: amt })
}
export const dec = amt => {
    reduxStore.dispatch({ type: "WITHDRAW", payload: amt })
}
/*
👆
- When you click buttons, these functions send actions to Redux.
- Redux updates the state using the reducer.
*/ 

// 📌 For Conneting React with Redux use this command: npm i react-redux
// Redux is Global State Manager
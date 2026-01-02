import React, { useReducer, useState } from 'react'

const bankReducer = (state, { type, payload }) => {
    switch (type) {
        case "DEPOSIT": return { ...state, balance: state.balance + payload };
        case "WITHDRAW": return { ...state, balance: state.balance - payload };
        default: return state;
    }
}
const LearnReducer = () => {
    const [theme, setTheme] = useState("dark")

    //                    👇 Initial Value              
    // const x = useReducer(() => { }, {}) => Array
    // console.log(x)
    //         👆 Reducer Function


    // const [state, dispatch] = useReducer(() => { }, { balance: 1000 })
    // console.log(state)
    const [{ balance }, dispatch] = useReducer(bankReducer, { balance: 1000 })
    return (
        <div>
            <h1>{theme}</h1>
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => setTheme(pre => pre === "dark" ? "light" : "dark")}
            >
                Toggle
            </button>
            <h1>{balance}</h1>
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => dispatch({ type: "DEPOSIT", payload: 100 })}>
                Deposit
            </button>
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => dispatch({ type: "WITHDRAW", payload: 500 })}>
                Withdraw
            </button>
        </div>
    )
}

export default LearnReducer
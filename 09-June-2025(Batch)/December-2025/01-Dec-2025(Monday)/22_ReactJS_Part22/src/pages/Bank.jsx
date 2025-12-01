import React from 'react'
import { useSelector } from 'react-redux'
import { dec, inc } from '../redux/store'
import { useState } from 'react'

const Bank = () => {
    const { balance } = useSelector(state => state)
    /*
    👆
    - useSelector reads data from the store.
    - Here, it pulls the current balance and shows it on the screen.
    */

    // const x = useSelector(state => state)
    // 👆 Has to pass a callback function.
    // 👆 Same as getState() in React.
    // console.log(x) 👉 Returns an Object with a key named - balance

    const [amount, setAmount] = useState(0)
    return (
        <div>
            <h4 className='alert alert-primary text-center mt-3'>
                Bank
            </h4>
            <h4 className='alert alert-warning text-center mt-3 w-25 mx-3'>
                {balance}
            </h4>

            <input
                type="number"
                className='form-control w-25 mx-3'
                placeholder='Enter Amount...'
                onChange={event => setAmount(+event.target.value)}
            />

            <button type="button" class="btn btn-success w-25 mx-3 mt-3" onClick={() => inc(amount)}>
                Deposit
            </button>
            <button type="button" class="btn btn-danger w-25 mx-3 mt-3" onClick={() => dec(amount)}>
                Withdraw
            </button>
        </div >
    )
}

export default Bank

/*
📌 React call => Action calls => Reducer (What is return by Reducer is Stored in ... ) => Store => And then from Store we are taking value to React to print on the screen using useSelector.
*/
/*
Flow Summary
React UI → Action (inc/dec) → Reducer → Store updates balance → React re-renders UI
*/
/*
- In One Line
Redux helps manage a global state.Your component reads balance with useSelector and updates it by dispatching actions using inc and dec.
*/ 
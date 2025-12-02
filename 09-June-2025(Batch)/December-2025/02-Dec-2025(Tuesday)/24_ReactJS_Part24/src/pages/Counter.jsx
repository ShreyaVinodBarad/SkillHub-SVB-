import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc, reset } from '../redux/actions/counterActions'

const Counter = () => {
    // const { count } = useSelector(someThing => someThing)
    const { count } = useSelector(someThing => someThing.counter)
    //                                           👆 from combineReducer
    /*
    👆
    someThing → the whole Redux state object
    a) useSelector(...)
    - A React-Redux hook used to read data from the Redux store.
    b) someThing => someThing.counter
    - This arrow function receives the entire Redux store state (someThing)
    - It returns only the counter part of state.
    - Example state:
    {
        counter: { count: 5 },
        todo: [...]
    }
    c) const { count } = ...
    - This is destructuring
    - It takes the count value from the counter object returned by useSelector.
    */

    const dispatch = useDispatch()
    /*
    👆
    - This line gives you a function called dispatch that allows your component to send actions to the Redux store.
    - In one line:
    useDispatch() is used to trigger actions so reducers can update the Redux state.
    */
    return (
        <div>
            <h1 className='alert alert-primary text-center mt-3 mx-4'>
                {count}
            </h1>
            <div className="btn-group w-75 mt-3 mx-5" role="group">
                <button onClick={() => dispatch(inc())} type="button" class="btn btn-success" >
                    +1
                </button>
                <button type="button" class="btn btn-warning" onClick={() => dispatch(reset())}>
                    Reset
                </button>
                <button type="button" class="btn btn-danger" onClick={() => dispatch(dec())}>
                    -1
                </button>
            </div>
        </div>
    )
}

export default Counter
import { combineReducers, createStore } from "redux"
import { counterReducer } from "./reducers/counterReducer"
import { toDoReducer } from "./reducers/toDoReducer"
import { composeWithDevTools } from "redux-devtools-extension"

// Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: toDoReducer
})
/*
👆
- Creates one main/root reducer by combining both reducers.
- Now the Redux state looks like:
{
  counter: ...data from counterReducer,
  todo: ...data from toDoReducer
}
*/


export const reduxStore = createStore(rootReducer, {}, composeWithDevTools())
/*
👆
- Creates the actual Redux store using:
a) rootReducer → tells Redux how to manage state
b) {} → initial state (empty object by default)
c) composeWithDevTools() → enables Redux DevTools support
*/

/*
npm i redux-devtools-extension --f                        
👆
A reminder comment to install the DevTools package required above.
*/

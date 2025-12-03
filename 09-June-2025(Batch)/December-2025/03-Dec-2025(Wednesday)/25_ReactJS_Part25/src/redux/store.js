/*
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { blogReducer } from "./reducer/blog.reducer"
import { thunk } from "redux-thunk"
// 👆 To handle Promises with Redux

const rootReducer = combineReducers({
    demo: blogReducer
})

//                               👇Reducer  👇InitialValue 👇DevTools
export const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)
*/

// srt => SkillHub Shortcut
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import { blogReducer } from "./reducer/blog.reducer"

const rootReducer = combineReducers({
    demo: blogReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore 
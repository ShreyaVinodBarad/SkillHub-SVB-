// 📌 Shortcut: srts
import { configureStore } from "@reduxjs/toolkit";
// 👆 Function to create Redux store
import { toDoApi } from "./apis/todo.api";


const reduxStore = configureStore({
    // 👆 Creating the main Redux store
    reducer: {
        [toDoApi.reducerPath]: toDoApi.reducer,
        /*
        👆 
        - This line is adding your API to Redux store
        1) [toDoApi.reducerPath]
        👆 This is the key (name) in store
        Value is "toDoApi"
        - So it becomes:
        toDoApi: ...
        2) toDoApi.reducer
        👆 This handles:
        - storing API data
        - loading state
        - error state 
        3) reducer: {
            toDoApi: toDoApi.reducer
        }
        👆 Your Redux store now has a section called toDoApi
        */
    },
    middleware: def => def().concat(toDoApi.middleware)
    /*
    👆
    We are adding extra middleware (RTK Query middleware) to Redux store.
    1) def
    - This is a function that gives default middleware
    2) .concat(toDoApi.middleware) 
    - Adds your API middleware to the list
    - So it becomes:
    defaultMiddleware + toDoApi.middleware
    3) Final Meaning: 
    - Take default middleware and add RTK Query middleware also
    - This line enables API features like fetching, caching, and auto updates.
    */
})

export default reduxStore
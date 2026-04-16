// 📌 Shortcut -> srts
import { configureStore } from "@reduxjs/toolkit";
// 👆 Importing configureStore. Used to create Redux store easily.
import { toDoApi } from "./apis/todo.api";
import { authApi } from "./apis/auth.api";
/*
👆
Importing your RTK Query API
This contains:
- reducer
- middleware
- endpoints
*/

const reduxStore = configureStore({
    // 👆 Creating the Redux store.
    reducer: {
        [toDoApi.reducerPath]: toDoApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    /*
    👆
    1) Adding reducers to store.
    2) What is happening here?
    toDoApi.reducerPath → "toDoApi"
    - So this becomes:
    toDoApi: toDoApi.reducer
    - This stores API data inside Redux state.
    - Without this → RTK Query won’t work.
    */
    middleware: def => def().concat(toDoApi.middleware, authApi.middleware)
    /*
    👆
    - Adding extra middleware.
    def() → default Redux middleware
    .concat(toDoApi.middleware) → adds RTK Query middleware
    1) Why needed?
    Middleware handles:
    - API requests
    - Caching
    - Auto refetch
    - Loading & error states
    - Without middleware → API will not function properly.
    */
})

export default reduxStore
// 👆 Exporting store so we can use it inside ReduxProvider.tsx.

/*
📌 Full Flow Understanding
todo.api.ts → gives reducer + middleware
store.ts → registers them
Provider → gives store to whole app
*/

/*
📌 Middleware:
Component → dispatch(action)
        ↓
    Middleware (middle layer)
        ↓
     reducer → state updated
- Middleware runs before reducer.
- Middleware is a function that runs between dispatching an action and updating the reducer, used to handle side effects like API calls, logging, or async logic.
*/ 
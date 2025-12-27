import { configureStore } from "@reduxjs/toolkit";
// 👆 Imports Redux Toolkit’s function to create the Redux store.
import { todoApi } from "./apis/todo.api";
// import { testApi } from "./apis/test.api";
// 👆 Imports two RTK Query APIs (todoApi and testApi).


const reduxStore = configureStore({
    // 👆 Creates the Redux store.
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        // [testApi.reducerPath]: testApi.reducer
    },
    /*
    👆 
    Adds reducers for both APIs
    reducerPath is the unique key name for each API in the store
    This is where API data is stored in Redux state
    */
    middleware: defaultMiddlewares => [
        ...defaultMiddlewares(),
        todoApi.middleware,
        // testApi.middleware
    ]
    /*
    👆
    Keeps Redux’s default middleware
    Adds RTK Query middleware
    This middleware handles:
        - API calls
        - caching
        - loading & error states
    */
})

export default reduxStore
// 👆 Exports the store so it can be used in Provider in main.jsx or index.js.

/*
1) In one line:
This code creates a Redux store and connects RTK Query APIs so your app can fetch, cache, and manage API data automatically.
------------------------------------------------------------
2) Caching:
- Caching means saving API data temporarily so it doesn’t fetch again and again.
a) In your RTK Query app:
First time → API is called → data is fetched from server
Next time → same data is taken from Redux store (cache)
❌ No new API call unless needed
b) Why it’s useful:
- Faster app
- Less internet usage
- Fewer API calls
c) In short:
Caching = reuse saved API data instead of calling server every time
------------------------------------------------------------
*/ 
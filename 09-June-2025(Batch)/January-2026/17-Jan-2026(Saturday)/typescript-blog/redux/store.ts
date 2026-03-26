// 📌 Shortcut => srts
import { configureStore } from "@reduxjs/toolkit";
/*
👆
- This imports configureStore from Redux Toolkit.
- configureStore is used to create the main Redux store of the app.
- The store keeps all application state (data) in one place.
*/
import { blogApi } from "./apis/blog.api";
/*
👆
- This imports blogApi from the apis folder.
- blogApi is usually created using RTK Query.
- It helps to fetch data from API, like blogs from a server.
*/

const reduxStore = configureStore({
    /*
    👆
    - Here we are creating the Redux store.
    - reduxStore will hold all application state.
    */
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
    },
    /*
    👆
    - reducer is a place where we store and manage data (state) in Redux.
    - blogApi.reducer This is the function that handles API data.
    It stores: fetched data, loading state, error
    - [blogApi.reducerPath] It is the name (key) where this data will be stored in the Redux store.
    */
    middleware: def => def().concat(blogApi.middleware)
    /*
    👆
    - Middleware adds extra functionality to Redux.
    - def() gives the default middleware provided by Redux Toolkit.
    - .concat(blogApi.middleware) adds RTK Query middleware.
    - This middleware helps:
    API calls
    caching 
    automatic refetching    
    loading states
    */
})

export default reduxStore
/*
👆
- This exports the store.
- It allows other files (like main.tsx / index.tsx) to use the Redux store.
*/ 
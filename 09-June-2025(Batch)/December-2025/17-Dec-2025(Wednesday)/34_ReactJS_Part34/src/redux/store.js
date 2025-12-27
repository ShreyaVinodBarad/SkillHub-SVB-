import { configureStore, createSlice } from "@reduxjs/toolkit";
import { productApi } from "./apis/product.api"
import { publicApi } from "./apis/public.api"
import cartSlice from "./slices/cart.slice"

const reduxStore = configureStore({
    // 👆 This makes a central store where all app data (state) is kept.
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        skillhub: cartSlice
    },
    /*
    👆
    This tells Redux what data it should manage:
    productApi.reducer → handles product data from backend (API)
    publicApi.reducer → handles public data from backend
    skillhub: cartSlice → handles cart data (add/remove items)
    - Think of reducers as different cupboards storing different things.
    */
    middleware: def => [...def(), productApi.middleware, publicApi.middleware]
    /*
    👆
    Middleware:
    - Helps Redux talk to the backend
    - Handles API calls, caching, loading, errors
    - Without this → API won’t work properly.
    */
})

export default reduxStore
// 👆 Makes the store available to the whole app

// 👆 This code creates the main Redux store for your app.
/*
👆
One-line summary
- This file sets up Redux, connects API data, and manages cart state in one place.
*/ 
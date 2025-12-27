import { configureStore } from "@reduxjs/toolkit";
// 👆 Brings a ready-made function to create the Redux store easily.
import productSlice from "./slices/product.slice"
// 👆 Imports the product-related reducer (logic for product state).

const reduxStore = configureStore({
    // 👆 Creates the Redux store (a central place to store app data).
    reducer: {
        inventory: productSlice,
    },
    /*
    👆
    Combines reducers.
    inventory → name of the state
    productSlice → handles data and actions for inventory
    */
})

export default reduxStore
// 👆 Makes the store available to use in the whole app.

// 👆 This code creates a Redux store and connects product data to it under the name inventory.
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // 👆 Helps you create Redux state + actions + reducer in one place.
    name: "cartSlice",
    // 👆 Just the name of this slice (used internally by Redux).
    initialState: { cart: [] },
    // 👆 The cart starts empty.
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart.push(payload)
        }
    },
    /*
    👆
    When you call addToCart, it adds a new item (payload) into the cart array.
    */
    extraReducers: builder => builder
    /*
    👆
    Used when handling actions from other slices or RTK Query
    (Not used here, so it’s empty)
    */
})

export const { addToCart } = cartSlice.actions
// 👆 Exports the addToCart action so components can use it.
export default cartSlice.reducer
// 👆 Exports the reducer so it can be added to the Redux store.

/*
👆 
This code creates a cart for your app using Redux Toolkit.
This slice stores cart items and lets you add items to the cart.
*/
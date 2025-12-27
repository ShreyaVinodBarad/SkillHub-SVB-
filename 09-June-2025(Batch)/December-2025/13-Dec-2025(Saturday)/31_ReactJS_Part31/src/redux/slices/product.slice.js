import { createSlice } from "@reduxjs/toolkit";
import { createProduct, readProduct } from "../actions/product.actions";
/*
👆
createSlice helps create redux reducer + actions easily.
createProduct and readProduct are async actions (thunks).
*/

const productSlice = createSlice({
    // 👆 Creates a slice of state related to products.
    name: "productSlice",
    // 👆 Name of this slice (used internally by Redux).
    initialState: { allProducts: [] },
    /*
    👆 
    Initial data for this slice.
    allProducts will store the product list.
    */
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    /*
    👆 
    invalidate is a normal action.
    It sets given state keys to false.
    Example use: reset flags like createSuccess.
    */
    extraReducers: builder => builder
        // 👆 Handles pending, fulfilled, rejected states of async actions.
        .addCase(createProduct.pending, (state, { payload }) => {
            state.loading = true
            state.createSuccess = false
        })
        // 👆 When API call starts → show loading.
        .addCase(createProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createSuccess = true
        })
        // 👆 When product is created successfully.
        .addCase(createProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        // 👆 When API fails → store error

        .addCase(readProduct.pending, (state, { payload }) => {
            state.loading = true
            // state.createSuccess = false
        })
        // 👆 When fetching products starts.
        .addCase(readProduct.fulfilled, (state, { payload }) => {
            // 👆 payload is the data returned from the API when readProduct is successful.
            state.loading = false
            // state.createSuccess = true
            state.allProducts = payload.data
            /*
            👆
            state → Redux store state for products
            allProducts → array in the state
            payload.data → product list from API
            1) Meaning:
            Store the product list coming from API into Redux state.
            2) After this line:
            state.allProducts = [
                    { id: 1, name: "Laptop" },
                    { id: 2, name: "Mobile" }
            ]
            */
            state.total = payload.total
            /*
            👆
            total → total number of products (used for pagination)
            payload.total → total count sent by API
            1) Meaning:
            Save total product count into Redux state.
            2) After this:
            state.total = 10
            */
        })
        /*
        👆 
        Save product list and total count.
        */
        .addCase(readProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    // 👆 API error handling.

})

export const { invalidate } = productSlice.actions
export default productSlice.reducer
/*
👆 
invalidate → used in components.
reducer → added to Redux store.
*/ 
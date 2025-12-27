import { createAsyncThunk } from "@reduxjs/toolkit";
// 👆 Imports createAsyncThunk, which is used to handle async work like API calls in Redux (fetching data, posting data, etc.).

import axios from "axios"
// 👆 Imports Axios, a library used to make HTTP requests (GET, POST, PUT, DELETE). Axios → talk to backend

const api = axios.create({
    baseURL: "http://localhost:5000"
})
/*
👆
Creates an Axios instance:
- baseURL means this URL will be added automatically to all API requests.
- Instead of writing full URLs every time, you just write endpoints like /users, /login.
- api → reusable API setup
*/

// 👇 It creates an async Redux action to add a new product using an API.
export const createProduct = createAsyncThunk(
    // 👆 Creates an async thunk action named createProduct that can be dispatched.
    "createProduct",
    // 👆 This is the action name (used by Redux to identify this action).
    async (productData, { rejectWithValue, getState }) => {
        /*
        👆
        productData → data of the product you want to add
        rejectWithValue → used to send error data if something goes wrong
        */
        try {
            const { data } = await api.post("/products", productData)
            // 👆 Sends a POST request to /products API to save product data.data = result returned by API after saving the product, product info
            return true
            // 👆 If API call is successful, it returns true.
        }
        catch (error) {
            return rejectWithValue(error.message || "Something went wrong!")
        }
        // 👆 If API fails, it sends the error message to Redux.
    }
)

// 👇 It fetches products from an API with pagination using Redux Toolkit.
export const readProduct = createAsyncThunk(
    /*
    👆
    Used to create an async Redux action
    "readProduct" is the action name
    */
    "readProduct",
    async (productData, { rejectWithValue, getState }) => {
        /*
        👆
        productData → contains { limit, page }
        rejectWithValue → sends error to Redux if API fails
        */
        try {
            const { data, headers } = await api.get("/products", {
                //          👆 headers are extra information sent by the server along with the response.
                params: {
                    _limit: productData.limit,
                    _page: productData.page
                }
            })
            /*
            👆
            Calls GET /products:
            _limit → how many items per page
            _page → which page to load
            data → product list
            headers → response headers
            */
            console.log(headers.get("X-Total-Count"))
            /*
            👆
            - Prints total number of products in the browser console
            headers → response headers from API
            .get() → used to read a header value
            "X-Total-Count" → header that tells total number of records
            It returns total products count
            */
            return { data, total: headers.get("X-Total-Count") }
            /*
            👆
            data → product list
            total → total products count
            Returned to Redux store
            */
        }
        catch (error) {
            return rejectWithValue(error.message || "Something went wrong!")
        }
        // 👆 Sends error message to Redux store
    }
)
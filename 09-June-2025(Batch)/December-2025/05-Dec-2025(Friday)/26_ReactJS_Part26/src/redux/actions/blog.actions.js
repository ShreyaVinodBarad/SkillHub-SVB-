import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/articles"
// 👆 This is the JSON Server or backend URL.

export const createBlog = createAsyncThunk("createBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.post(API_URL, blogData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
/*
👆
Explanation:
- "createBlog" → action name.
- blogData → data you want to send (title, description, etc.).
- axios.post(API_URL, blogData) → sends data to server.
- rejectWithValue → sends error message to Redux if API fails.
*/

export const readBlog = createAsyncThunk("readBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await axios.get(API_URL)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
/*
👆
Explanation:
- "readBlog" → action name.
- axios.get(API_URL) → fetch all articles.
- return data → sends fetched data to Redux slice.
- Error is handled using rejectWithValue.
*/

/*
1) What is createAsyncThunk?
- createAsyncThunk is used in Redux Toolkit to handle API calls (async work) like GET, POST, PUT, DELETE.
a) It:
- Runs your async code
- Automatically gives loading, success, error states
- Helps you write cleaner Redux code
--------------------------------------------------------------
2) Syntax
createAsyncThunk("actionName", async (data, thunkAPI) => {
    try {
        // API call
        return result
    } catch (error) {
        return thunkAPI.rejectWithValue(errorMessage)
    }
})
--------------------------------------------------------------
*/ 
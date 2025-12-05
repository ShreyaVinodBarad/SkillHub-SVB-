import { createSlice } from "@reduxjs/toolkit";
import { createBlog, readBlog } from "../actions/blog.actions";
/*
👆
createSlice helps you make reducers + actions easily
createBlog & readBlog are async thunks (API calls)
*/

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: { allBlogs: [] },
    // 👆 Your store will start with an empty blogs array. 
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
        /*
        👆
        invalidate(["success", "error"])
        → sets state.success = false and state.error = false
        This helps you reset values.
        */
    },
    extraReducers: builder => builder
        .addCase(createBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        /*
        👆
        - When createBlog API request starts
        Meaning:
        ⏳ show loader while posting a blog.
        */
        .addCase(createBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.success = true
        })
        /*
        👆
        When createBlog succeeds
        Meaning:
        - Blog created successfully.
        */
        .addCase(createBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        /*
        👆
        When createBlog fails
        Meaning:
        - Save the error message.
        */

        .addCase(readBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        // 👆 pending
        .addCase(readBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allBlogs = payload
        })
        // 👆 fulfilled - Blog list fetched successfully.
        .addCase(readBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    // 👆 rejected
})

export const { invalidate } = blogSlice.actions
export default blogSlice.reducer
/*
👆
- invalidate is exported so you can use it in components.
- Reducer goes to your store.
*/

/*
👆
- It creates a Redux Slice for blogs.
- A slice contains:
a) initialState → starting data
b) reducers → normal functions
c) extraReducers → handles async API calls (createBlog, readBlog)
*/

/*
📌 In short
This slice:
- Handles loading, success, error states
- Stores all blogs
- Handles two API calls (createBlog & readBlog)
- Has a reset function (invalidate)
*/ 
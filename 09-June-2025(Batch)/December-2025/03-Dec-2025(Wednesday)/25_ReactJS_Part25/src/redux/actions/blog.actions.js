import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"
import axios from "axios"

const API_URL = "http://localhost:5000/articles"
export const createBlog = formData => {
    return async (dispatch) => {
        try {
            await axios.post(API_URL, formData)
            // reduxStore.dispatch === dispatch => With the help of Thunk
            dispatch({ type: BLOG_CREATE_SUCCESS, payload: "" })
        } catch (err) {
            dispatch({ type: BLOG_CREATE_FAIL, payload: err })
            console.log(err)
        }
    }
    // 👆 Syntax when using Thunk
}

export const readBlogs = userData => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(API_URL)
        dispatch({ type: BLOG_READ_SUCCESS, payload: data })
        // data => Array of Object
    } catch (error) {
        dispatch({ type: BLOG_READ_FAIL, payload: error.message })
    }
}

/*
npm i redux-thunk --f
👆
- Means you are installing redux-thunk in your project.
a) npm i → install a package
b) redux-thunk → a middleware used in Redux
- It allows you to write async code (like API calls) inside actions.
c) --f or --force → forces the installation even if there are warnings or conflicts.
*/ 
// import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"

import { BLOG_CREATE_FAIL, BLOG_CREATE_SUCCESS, BLOG_READ_FAIL, BLOG_READ_SUCCESS } from "../constants/blog.constants"

/*
export const blogReducer = (state = { notes: [] }, { type, payload }) => {
    // 👇 Conditions goes here...
    if (type === BLOG_CREATE_SUCCESS) {
        return { ...state, success: true }
    } else if (type === BLOG_CREATE_FAIL) {
        return { ...state, success: false, error: payload }
        // 👆 dispatch({ type: BLOG_CREATE_FAIL, payload: err }) 👉 here in payload this is the err which is coming from blog.actions.js
    } else if (type === BLOG_READ_SUCCESS) {
        return { ...state, readSuccess: true, notes: payload }
    } else if (type === BLOG_READ_FAIL) {
        return { ...state, readError: payload }
    }
    else {
        return state
    }
}
*/

// srred => SkillHub Shortcut
export const blogReducer = (state = { notes: [] }, { type, payload }) => {
    switch (type) {
        case BLOG_CREATE_SUCCESS: return { ...state, success: true }
        case BLOG_CREATE_FAIL: return { ...state, success: false, error: payload }
        case BLOG_READ_SUCCESS: return { ...state, readSuccess: true, notes: payload }
        case BLOG_READ_FAIL: return { ...state, readError: payload }
        default: return state
    }
}
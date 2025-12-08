import { createSlice } from "@reduxjs/toolkit";
import { signin } from "../actions/auth.actions";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("local-admin")) },
    reducers: {
        // 👇 Action + Reducer
        signout: (state, { payload }) => {
            state.admin = null
            state.success = false
            state.error = false
            localStorage.removeItem("local-admin")
        }
    },
    extraReducers: builder => builder
        .addCase(signin.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(signin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.admin = payload
            state.success = true
        })
        .addCase(signin.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { signout } = authSlice.actions
export default authSlice.reducer
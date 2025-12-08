import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice"

const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
    },
})

export default reduxStore
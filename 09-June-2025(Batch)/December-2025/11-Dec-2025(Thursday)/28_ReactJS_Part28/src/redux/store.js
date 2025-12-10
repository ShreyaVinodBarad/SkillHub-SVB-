import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice"
import adminSlice from "./slices/admin.slice";

const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice
    },
})

export default reduxStore
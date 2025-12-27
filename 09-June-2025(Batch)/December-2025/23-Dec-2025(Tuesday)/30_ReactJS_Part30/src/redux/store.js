// srts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";
import authSlice from "./slices/auth.slice"
import { tpoApi } from "./apis/tpo.api";

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [tpoApi.reducerPath]: tpoApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, tpoApi.middleware]
})

export default reduxStore
// 📌 Shortcut: srts
import { configureStore } from "@reduxjs/toolkit";
import { toDoApi } from "./apis/todo.api";


const reduxStore = configureStore({
    reducer: {
        [toDoApi.reducerPath]: toDoApi.reducer,
    },
    middleware: def => def().concat(toDoApi.middleware)
})

export default reduxStore
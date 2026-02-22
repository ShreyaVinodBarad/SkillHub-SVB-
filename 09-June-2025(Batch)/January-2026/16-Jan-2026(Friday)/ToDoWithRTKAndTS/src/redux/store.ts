// 📌 Shortcut: srts -> SkillHub
import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/todo.api";


const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: def => def().concat(todoApi.middleware)
})

// reduxStore.getState() === useSelector()
// 👆 To see all redux values, but can only use in Redux Code

export type AppSelector = ReturnType<typeof reduxStore.getState>

export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore
// 📌 Shortcut: srtapi 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Note } from "../../types/ToDoNote"

export const toDoApi = createApi({
    reducerPath: "toDoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getToDos: builder.query<Note[], void>({
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addToDo: builder.mutation<void, Note>({
                query: toDoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: toDoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateToDo: builder.mutation<void, Note>({
                query: toDoData => {
                    return {
                        url: "/notes/" + toDoData.id,
                        method: "PATCH",
                        body: toDoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteToDo: builder.mutation<void, number>({
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["todo"]
            })
        }
    }
})

export const {
    useAddToDoMutation,
    useUpdateToDoMutation,
    useDeleteToDoMutation,
    useGetToDosQuery
} = toDoApi

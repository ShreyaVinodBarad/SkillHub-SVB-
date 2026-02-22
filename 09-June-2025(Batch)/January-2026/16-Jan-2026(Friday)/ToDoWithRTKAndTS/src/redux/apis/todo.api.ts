// 📌 Shortcut: srtapi -> SkillHub
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { TODO_TYPE } from "../../types/note"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getNotes: builder.query<TODO_TYPE[], void>({
                // 👆 This will return array of object i.e.; ToDo_Type's array. Void => No arguments required
                query: () => {
                    // 👆 => here () - no argument is passed so void
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addNote: builder.mutation<void, TODO_TYPE>({
                // 👆 void => Return Data and TODO_TYPE => todoData custom data type
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateNote: builder.mutation<void, TODO_TYPE>({
                // 👆 void => Return Data and TODO_TYPE => todoData custom data type
                query: todoData => {
                    return {
                        url: "/notes/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteNote: builder.mutation<void, number>({
                // 👆 void => Return Data and number => id's data type
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["todo"]
            }),
        }
    }
})

export const {
    useAddNoteMutation,
    useGetNotesQuery,
    useUpdateNoteMutation,
    useDeleteNoteMutation
} = todoApi

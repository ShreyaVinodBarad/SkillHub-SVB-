// 📌 Shortcut: srtapi
import { Note } from "@/app/types/Note"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const toDoApi = createApi({
    reducerPath: "toDoApi", // 👉 Change the code here
    // 👆 Name used in Redux store
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // 👆 Base URL of your backend API
    tagTypes: ["todo"], // 👉 Change the code here 
    // 👆 Used for caching & auto-refreshing data
    endpoints: (builder) => {
        // 👆 Here you define all API operations
        return {
            getToDos: builder.query<Note[], void>({
                // 👆 Fetch all todos (GET request)
                /*
                👆
                query = used for GET (fetch data)
                <Note[], void> means:
                Note[] → returns list of todos
                void → no input needed
                */
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
                /*
                👆
                - Saves (caches) this data with tag "todo"
                - So it knows when to refresh
                */
            }),
            addToDo: builder.mutation<void, Note>({
                // 👆 Add new todo (POST request)
                /*
                👆
                mutation = used for changing data (POST, PUT, DELETE)
                <void, Note> means:
                void → no response needed
                Note → takes todo data as input
                */
                query: toDoData => {
                    // 👆 the todo object you pass when creating a new todo
                    return {
                        url: "/notes",
                        method: "POST",
                        body: toDoData
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After adding → refresh todo list automatically
                /*
                👆
                After adding:
                - Old data becomes invalid
                - getToDos runs again automatically
                UI updates automatically
                */
            }),
            updateToDo: builder.mutation<void, Note>({
                // 👆 Update existing todo (PATCH request)
                /*
                👆
                mutation = used for changing data (POST, PUT, DELETE)
                <void, Note> means:
                void → no response needed
                Note → takes todo data as input
                */
                query: toDoData => {
                    return {
                        url: "/notes/" + toDoData.id,
                        method: "PATCH",
                        body: toDoData
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After update → refresh list automatically
            }),
            deleteToDo: builder.mutation<void, number>({
                // 👆 Delete todo (DELETE request)
                /*
                👆
                <void, number> means:
                void: no response needed
                number: what data you pass into this function
                id must be a number
                => Means:
                Takes number (id) as input
                Returns nothing (void)
                */
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After delete → refresh list automatically
            }),

        }
    }
})

export const {
    useAddToDoMutation,
    useGetToDosQuery,
    useUpdateToDoMutation,
    useDeleteToDoMutation
} = toDoApi

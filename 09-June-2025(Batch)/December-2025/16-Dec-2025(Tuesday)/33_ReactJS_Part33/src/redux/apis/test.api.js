import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
/*
👆
createApi → used to create an API service
fetchBaseQuery → a simple way to make API calls (like fetch)
*/

export const testApi = createApi({
    // 👆 Creates an API slice named testApi
    reducerPath: "testApi",
    // 👆 Name under which this API data is stored in Redux store
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // 👆 Common backend URL for all API calls
    tagTypes: ["notes"],
    /*
    👆 
    Used for caching & auto refresh
    "notes" represents todo data
    */
    endpoints: (builder) => {
        // 👆 Where all API calls (GET, POST, PATCH, DELETE) are defined
        return {
            getAllTodos: builder.query({
                // 👆 Creates a GET request
                query: () => {
                    return {
                        url: "/todos",
                        method: "GET"
                    }
                    // 👆 Calls GET /todos
                },
                providesTags: ["notes"]
                // 👆 Saves response in cache with tag "notes"
            }),

            addTodo: builder.mutation({
                // 👆 Creates a POST request
                query: todoData => {
                    return {
                        url: "/todos",
                        method: "POST",
                        body: todoData
                    }
                    // 👆 Sends new todo data to backend
                },
                invalidatesTags: ["notes"]
                // 👆 Clears old cache → re-fetches todos automatically
            }),

            updateTodo: builder.mutation({
                // 👆 Creates a PATCH request
                query: todoData => {
                    return {
                        url: "/todos/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                    // 👆 Updates todo using its id
                },
                invalidatesTags: ["notes"]
                // 👆 Refreshes todo list after update
            }),

            deleteTodo: builder.mutation({
                // 👆 Creates a DELETE request
                query: id => {
                    return {
                        url: "/todos/" + id,
                        method: "DELETE"
                    }
                    // 👆 Deletes todo by id
                },
                invalidatesTags: ["notes"]
                // 👆 Refreshes todo list after delete
            })

        }
    }
})

export const { useAddTodoMutation, useDeleteTodoMutation, useGetAllTodosQuery, useUpdateTodoMutation } = testApi
/*
👆
Auto-generated React hooks
Used directly inside components
*/
/*
In one line:
RTK Query handles API calls, caching, auto refresh, and loading state for you
*/ 
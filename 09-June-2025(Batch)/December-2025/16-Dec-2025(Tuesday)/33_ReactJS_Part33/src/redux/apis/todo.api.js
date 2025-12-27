import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// 👆 Imports RTK Query tools to create API logic and make HTTP requests.

export const todoApi = createApi({
    // 👆 Creates an API slice named todoApi.
    reducerPath: "todoApi",
    // 👆 Key name under which API state is stored in Redux store.
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // 👆 Sets base URL for all API requests.
    endpoints: (builder) => {
        // 👆 Defines all API endpoints (CRUD operations).
        return {
            // Create TO Do 👇
            createToDo: builder.mutation({
                // 👆 Creates a mutation for adding data.
                query: todoData => {
                    // 👆 Receives to do data from component.
                    return {
                        url: "/todos",
                        method: "POST",
                        body: todoData
                        // 👆 Sends POST request to add a new todo.
                    }
                },
                invalidatesTags: ["test"]
                // 👆 Refreshes cached data after creation.
            }), // create, update, delete

            // Read To do 👇
            readToDo: builder.query({
                // 👆 Creates a query for fetching data.
                query: todoData => {
                    return {
                        url: "/todos",
                        method: "GET"
                        // 👆 Gets all todos from server.
                    }
                },
                providesTags: ["test"]
                // 👆 Tags data so it can be refreshed automatically.
            }), // read

            // Delete To do 👇
            deleteToDo: builder.mutation({
                // 👆 Mutation to delete data.
                query: id => {
                    // 👆 Receives to do ID.
                    return {
                        url: "/todos/" + id,
                        method: "DELETE"
                        // 👆 Deletes to do by ID.
                    }
                },
                invalidatesTags: ["test"]
                // 👆 Refetches todos after delete.
            }),
        }
    }
})

// Actions 👇
export const { useCreateToDoMutation, useReadToDoQuery, useDeleteToDoMutation } = todoApi
/*
👆
Exports auto-generated React hooks.
Hooks used inside components to call APIs.
*/

/*
1) Query and Mutation
a) Query
➡ Used to get (read) data from the server
➡ Example: Fetch todo list
➡ Automatically runs when component loads
➡ Caches data (stores it)
Think: “Give me data”
b) Mutation
➡ Used to change data on the server
➡ Example: Add, update, delete todo
➡ Runs only when you call it
➡ Can refresh query data
Think: “Change data”
c) Simple memory trick:
Query = Read
Mutation = Create / Update / Delete
--------------------------------------------------------------
2) providesTags and invalidatesTags 
a) providesTags
Says: “This API gives this data”
providesTags: ["test"]
✔ Used in GET (read)
✔ Marks fetched data with a tag
✔ RTK Query knows this data exists
👉 Example:
“The todos list has tag test”
b) invalidatesTags
Says: “This data is now old, refresh it”
invalidatesTags: ["test"]
✔ Used in POST / PUT / DELETE
✔ Clears old cached data
✔ Automatically re-fetches the GET API
👉 Example:
“A to do changed, so re-load todos with tag test”
c) Simple flow
- readTodo → providesTags: ["test"]
- createTodo / deleteTodo → invalidatesTags: ["test"]
- RTK Query auto calls readTodo again 
d) One-line summary
providesTags = mark data
invalidatesTags = refresh data
--------------------------------------------------------------
*/ 
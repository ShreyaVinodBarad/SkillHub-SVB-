// 📌 Shortcut => strapi
import { ToDo } from "@/types/ToDo"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const toDoApi = createApi({
    // 👆 Creating API slice named toDoApi.
    reducerPath: "toDoApi",
    // 👆 Name used inside Redux store.
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/todo" }),
    /*
    👆 Base URL for all API requests.
    Base URL is the common root path of API, and each endpoint adds its specific route to form the final request URL.
    */
    tagTypes: ["todo"],
    // 👆 Used for cache control. "todo" tag helps refresh data automatically.
    endpoints: (builder) => {
        // 👆 Defining API endpoints using builder.
        return {
            //                       👇 Comes from ToDo.ts => types Folder 
            getToDos: builder.query<ToDo[], void>({
                /*
                👆 Query request
                Returns: array of ToDo
                Takes: no argument (void)
                */
                query: () => {
                    // 👆 Function that defines request.
                    return {
                        url: "/",
                        method: "GET"
                    }
                },

                transformResponse: (response: any) => response.result,
                /*
                👆
                1) What Is response?
                - When your backend sends this:
                {
                  "success": true,
                  "result": [
                    { "_id": "1", "task": "Learn JS" }
                  ]
                }
                - That whole object is called:
                response
                2) What Does This Line Do?
                (response: any) => response.data
                - It means:
                👉 Take the full response
                👉 Return only the result part
                - So instead of returning:
                {
                  success: true,
                  result: [...]
                }
                It returns only:
                [ ...todos ]
                3) Why We Need This?    
                - Because in your component you are doing:    
                data.map(...)   
                - .map() works only on arrays.   
                - But backend was sending object.    
                - So we extract only the array part. 
                */

                providesTags: ["todo"]
                // 👆 This data belongs to the todo category. This query gives todo data.
            }),
            // 👆 GET request to: http://localhost:5000/api/todo/
            addToDo: builder.mutation<void, ToDo>({
                /*
                👆 Mutation (changes data)
                Returns: nothing
                Takes: ToDo object
                */
                query: toDoData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: toDoData
                        // 👆 Sends ToDo data to backend.
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After adding, refresh "todo" data automatically.
            }),
            updateToDo: builder.mutation<void, ToDo>({
                /*
                👆 Mutation (changes data)
                Returns: nothing
                Takes: ToDo object
                - Updates existing todo.
                */
                query: toDoData => {
                    return {
                        url: "/modify/" + toDoData._id as string,
                        // 👆 Sends ID in URL. as string → TypeScript casting.
                        method: "PATCH",
                        body: toDoData
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After updating, refresh "todo" data automatically.
            }),
            deleteToDo: builder.mutation<void, string>({
                /*
                👆
                Deletes todo
                Returns: nothing
                Takes: string ID
                */
                query: _id => {
                    return {
                        url: "/delete/" + _id,
                        method: "DELETE"
                        // 👆 Delete request using ID.
                    }
                },
                invalidatesTags: ["todo"]
                // 👆 After deleting, refresh "todo" data automatically.
            })
        }
    }
})

export const {
    useAddToDoMutation,
    useDeleteToDoMutation,
    useGetToDosQuery,
    useUpdateToDoMutation
} = toDoApi
/*
👆
📌 Exporting Hooks: Automatically generated React hooks.
*/ 
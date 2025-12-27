import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tpoApi = createApi({
    reducerPath: "tpoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["student"],
    endpoints: (builder) => {
        return {
            getStudents: builder.query({
                query: () => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { role: "student" }
                    }
                },
                providesTags: ["student"]
            }),
            addStudent: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["student"]
            }),
            updateStudent: builder.mutation({
                query: userData => {
                    return {
                        url: "/users/" + userData.id,
                        method: "PATCH",
                        body: userData
                    }
                },
                invalidatesTags: ["student"]
            }),
            deleteStudent: builder.mutation({
                query: id => {
                    return {
                        url: "/users/" + id,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["student"]
            })
        }
    }
})

export const {
    useAddStudentMutation,
    useDeleteStudentMutation,
    useGetStudentsQuery,
    useUpdateStudentMutation
} = tpoApi

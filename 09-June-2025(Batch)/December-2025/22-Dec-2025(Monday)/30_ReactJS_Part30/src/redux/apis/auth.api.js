import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            login: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    if (data.length === 0) {
                        throw new Error("Invalid Credientials!")
                    }
                    else {
                        return data[0]
                    }
                },
                providesTags: []
            }),
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),

        }
    }
})

export const { useLazyLoginQuery, useRegisterMutation } = authApi

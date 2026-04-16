// 📌 Shortcut => strapi
import { User } from "@/types/User"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
        // 👆 Send cookies along with every request. For frontend.
        /*
        👆
        In short: 
        credentials: "include" (frontend) → send cookies
        credentials: true (backend) → allow cookies => server -> index.js
        */
    }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            signup: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),
            signin: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            }),
            signout: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: []
            })
        }
    }
})

export const {
    useSignupMutation,
    useSigninMutation,
    useSignoutMutation
} = authApi

// 📌 Shortcut => srtapi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Blog } from "../../types/Blog"

export const blogApi = createApi({
    reducerPath: "blogApi", // 👈 Change
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["blog"], // 👈 Change
    endpoints: (builder) => {
        return {
            getBlogs: builder.query<Blog[], void>({
                //                       👆 <What will the function return? (Return Type), What argument the function want? (Argument Type)>
                query: () => {
                    return {
                        url: "/blogs",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation<void, Blog>({
                //                        👆 <What argument the function want?(Argument Type), What will the function return? (Return Type)>
                //                            👆 In blogData we expect an Object so we return an Object i.e.; Blog 
                query: blogData => {
                    return {
                        url: "/blogs",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation<void, Blog>({
                //                           👆 <What argument the function want? (Argument Type), What will the function return? (Return Type)>
                //                               👆 In blogData we expect an Object so we return an Object i.e.; Blog 
                query: blogData => {
                    return {
                        url: "/blogs/" + blogData.id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation<void, number>({
                //                           👆 <What argument the function want? (Argument Type), What will the function return? (Return Type-Number)>
                query: id => {
                    return {
                        url: "/blogs/" + id,
                        method: "DELETE"
                    }
                },
                invalidatesTags: ["blog"]
            }),
        }
    }
})

export const {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useGetBlogsQuery,
    useUpdateBlogMutation
} = blogApi
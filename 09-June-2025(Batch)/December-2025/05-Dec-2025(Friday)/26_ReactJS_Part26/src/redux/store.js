import { configureStore } from "@reduxjs/toolkit";
/*
👆
- configureStore is a tool from Redux Toolkit.
- It helps to create a store easily with fewer steps.
*/
import blogSlice from "./slices/blog.slice"
/*
👆
- You created a slice named blogSlice in another file.
- Here you are importing its reducer.
*/

const reduxStore = configureStore({
  reducer: {
    devBlog: blogSlice,
  },
})
/*
👆
- configureStore({ }) → creates the main Redux store.
- reducer: { devBlog: blogSlice }
a) This means:
- The state name will be devBlog.
- The data & actions of blogSlice will live inside devBlog.
b) Example state structure:
state = {
  devBlog: { ...dataFromBlogSlice }
}
*/

export default reduxStore

// 👆 This code creates a Redux store using Redux Toolkit and connects your blog slice to it.

/*
📌 Simple Summary
- You imported configureStore.
- You imported your blog slice.
- You made a Redux store.
- You connected the blog slice reducer to the store under the name devBlog.
- You exported the store for use in React.
*/ 
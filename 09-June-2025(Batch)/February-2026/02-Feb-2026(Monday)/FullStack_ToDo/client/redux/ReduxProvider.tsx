"use client"
/*
👆
Tells Next.js this is a Client Component.
Redux works only on client side, so this is required.
*/

import { Provider } from "react-redux"
/*
👆
Importing Provider component.
Provider connects Redux store to your React app.
*/
import reduxStore from "./store"
// 👆 Importing the Redux store you created in store.ts.

// 👇 Creating ReduxProvider Component
const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    /*
    👆
    Creating a wrapper component.
    children → All components inside this wrapper
    React.ReactNode → Any valid React content (components, JSX, text, etc.)
    */
    return <>
        {/* 
        👆 
        Returning JSX.
        <> </> is React Fragment (no extra div). 
        */}
        <Provider store={reduxStore}>
            {/* 
            👆
            Giving the Redux store to the whole app.
            store={reduxStore} → Connecting your store
            Without this → Redux won’t work in components.
            */}
            {children}
            {/* 
            👆
            1) Rendering all wrapped components inside Provider.
            2) This means:
            Every child can use:
            - useSelector
            - useDispatch
            - RTK Query hooks
            */}
        </Provider>
    </>
}
export default ReduxProvider
// 📌 ReduxProvider wraps the application with Redux’s Provider and gives access to the Redux store to all child components.
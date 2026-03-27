"use client"
/*
👆
- Tells Next.js:
“This is a client component (runs in browser)”
*/

import { Provider } from "react-redux"
// 👆 Provider connects Redux store to your app

import reduxStore from "./store"
// 👆 Import your Redux store (where all data is stored)

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    /*
    👆
    1) ({ children })
    - Taking props as input
    - children = whatever you put inside this component
    2) : { children: React.ReactNode }
    - This is TypeScript type
    - It means:
    children can be anything React can render
    (text, JSX, components, etc.)
    */
    return (
        <>
            <Provider store={reduxStore}>
                {/* 
                👆
                - Giving Redux store to entire app  
                - Now all components can:
                access data
                use API hooks
                */}
                {children}
                {/* 👆 Render all child components inside Provider */}
            </Provider>
        </>
    )
}

export default ReduxProvider
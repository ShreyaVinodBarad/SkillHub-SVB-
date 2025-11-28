import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthorNavBar from "./AuthorNavBar"
import AuthorProtected from './AuthorProtected'
const AuthorLayout = () => {
    return (
        /*
        <div>
        <AuthorNavBar />
        <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
        <Outlet />
        </div>
        </div>
        */

        // 👇 If there is something in the author than only load the children of the AuthorProtected and when we refresh the page it will author will be null so redirect to Login page
        <AuthorProtected>
            <AuthorNavBar />
            <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
                <Outlet />
            </div>
        </AuthorProtected>
    )
}

export default AuthorLayout
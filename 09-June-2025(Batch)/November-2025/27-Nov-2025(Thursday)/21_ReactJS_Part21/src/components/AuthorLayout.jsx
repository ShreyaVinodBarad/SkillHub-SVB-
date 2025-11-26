import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthorNavBar from "./AuthorNavBar"
const AuthorLayout = () => {
    return (
        <div>
            <AuthorNavBar />
            <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthorLayout
import React from 'react'
import AdminNavBar from './AdminNavBar'
import { Outlet } from 'react-router-dom'
import AdminProtected from "./AdminProtected"
const AdminLayout = () => {
    return (
        // 👇 If there is something in the admin than only load the children of the AdminProtected and when we refresh the page it will admin will be null so redirect to Login page
        <AdminProtected>
            <AdminNavBar />
            <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
                <Outlet />
            </div>
        </AdminProtected>
    )
}

export default AdminLayout
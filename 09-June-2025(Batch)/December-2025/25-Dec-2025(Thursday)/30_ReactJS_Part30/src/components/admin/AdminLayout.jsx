import React from 'react'
import AdminProtected from "./AdminProtected"
import AdminNavBar from './AdminNavBar'
import { Outlet } from "react-router-dom"
const AdminLayout = () => {
    return (
        <AdminProtected>
            <AdminNavBar />
            <Outlet />
        </AdminProtected>
    )
}

export default AdminLayout
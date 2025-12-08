import React from 'react'
import AdminNavBar from "./AdminNavbar"
import { Outlet } from "react-router-dom"
import AdminProtected from './AdminProtected'
const AdminLayout = () => {
    return (
        <AdminProtected>
            <AdminNavBar />
            <Outlet />
        </AdminProtected>
    )
}

export default AdminLayout
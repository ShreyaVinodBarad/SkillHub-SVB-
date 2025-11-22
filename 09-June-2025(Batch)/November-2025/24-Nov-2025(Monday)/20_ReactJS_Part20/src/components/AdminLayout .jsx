import React from 'react'
import AdminProtected from './AdminProtected'
import AdminNavBar from './AdminNavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <AdminProtected>
                <AdminNavBar />
                <Outlet />
            </AdminProtected>
            {/* 👆 Does not permit to open admin page without login. */}
        </div>
    )
}

export default AdminLayout 
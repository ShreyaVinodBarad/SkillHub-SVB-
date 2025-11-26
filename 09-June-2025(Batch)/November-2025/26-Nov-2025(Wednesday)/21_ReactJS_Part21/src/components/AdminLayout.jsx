import React from 'react'
import AdminNavBar from './AdminNavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            <AdminNavBar />
            <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout
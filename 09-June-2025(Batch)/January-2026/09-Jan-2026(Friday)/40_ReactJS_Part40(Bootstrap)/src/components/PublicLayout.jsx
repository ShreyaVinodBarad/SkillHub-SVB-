import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavbar from './PublicNavbar'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <PublicNavbar />
            <Outlet />
        </div>
    )
}

export default PublicLayout
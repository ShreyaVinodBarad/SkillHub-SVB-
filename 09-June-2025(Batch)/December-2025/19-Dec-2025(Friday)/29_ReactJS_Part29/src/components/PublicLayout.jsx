import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div>
            <PublicNavbar />
            <Outlet />
        </div>
    )
}

export default PublicLayout
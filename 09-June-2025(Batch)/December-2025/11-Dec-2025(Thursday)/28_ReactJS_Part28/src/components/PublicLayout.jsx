import React from 'react'
import PublicNavBar from "./PublicNavBar"
import { Outlet } from "react-router-dom"
const PublicLayout = () => {
    return (
        <div>
            <PublicNavBar />
            <Outlet />
        </div>
    )
}

export default PublicLayout
import React from 'react'
import CompanyProtected from "./CompanyProtected"
import CompanyNavBar from "./CompanyNavBar"
import { Outlet } from "react-router-dom"
const CompanyLayout = () => {
    return (
        <CompanyProtected>
            <CompanyNavBar />
            <Outlet />
        </CompanyProtected>
    )
}

export default CompanyLayout
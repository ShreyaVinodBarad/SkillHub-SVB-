import React from 'react'
import EmployeeNavBar from "./EmployeeNavBar"
import { Outlet } from "react-router-dom"

const EmployeeLayout = () => {
    return (
        <div>
            <EmployeeNavBar />
            <Outlet />
        </div>
    )
}

export default EmployeeLayout
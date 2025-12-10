import React from 'react'
import EmployeeNavBar from "./EmployeeNavBar"
import { Outlet } from "react-router-dom"
import EmployeeProtected from './EmployeeProtected'

const EmployeeLayout = () => {
    return (
        <EmployeeProtected>
            <EmployeeNavBar />
            <Outlet />
        </EmployeeProtected>
    )
}

export default EmployeeLayout
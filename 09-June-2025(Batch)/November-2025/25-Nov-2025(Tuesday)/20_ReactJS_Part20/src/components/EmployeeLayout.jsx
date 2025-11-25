import React from 'react'
import EmployeeProtected from './EmployeeProtected'
import EmployeeNavBar from './EmployeeNavbar'
import { Outlet } from 'react-router-dom'

const EmployeeLayout = () => {
    return (
        <div>
            <EmployeeProtected>
                <EmployeeNavBar />
                <Outlet />
            </EmployeeProtected>
        </div>
    )
}

export default EmployeeLayout
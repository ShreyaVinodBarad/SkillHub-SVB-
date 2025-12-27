import React from 'react'
import StudentProtected from "./StudentProtected"
import StudentNavBar from "./StudentNavBar"
import { Outlet } from "react-router-dom"
const StudentLayout = () => {
    return (
        <StudentProtected>
            <StudentNavBar />
            <Outlet />
        </StudentProtected>
    )
}

export default StudentLayout
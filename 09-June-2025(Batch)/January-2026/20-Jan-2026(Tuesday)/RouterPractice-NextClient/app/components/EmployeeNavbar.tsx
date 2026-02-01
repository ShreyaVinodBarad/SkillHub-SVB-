import Link from 'next/link'
import React from 'react'

const EmployeeNavbar = () => {
    return (
        <div className='bg-yellow-400 flex gap-2'>
            <Link href="/employee">EmployeeDashboard</Link>
            <Link href="/employee/profile">EmployeeProfile</Link>
        </div>
    )
}

export default EmployeeNavbar
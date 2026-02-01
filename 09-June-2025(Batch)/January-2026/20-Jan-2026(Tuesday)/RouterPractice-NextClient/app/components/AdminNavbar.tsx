import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
    return (
        <div className='bg-green-400 flex gap-2'>
            <Link href="/admin">Dashboard</Link>
            <Link href="/admin/profile">AdminProfile</Link>
        </div>
    )
}

export default AdminNavbar
import Link from 'next/link'
import React from 'react'

const PublicNavbar = () => {
    return (
        <div className='bg-red-400 flex gap-2'>
            <Link href="/">Home</Link>
            <Link href="/signin">Login</Link>
            <Link href="/signup">Register</Link>
        </div>
    )
}

export default PublicNavbar
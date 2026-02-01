import React from 'react'
import PublicNavbar from '../components/PublicNavbar';
import EmployeeNavbar from '../components/EmployeeNavbar';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>
        <EmployeeNavbar />
        {children}
    </>
}

export default layout
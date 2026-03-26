import Link from "next/link"

const EmployeeNavbar = () => {
    return (
        <div className="bg-blue-400 p-4 flex gap-4">
            <Link href="/employee">Employee Dashboard</Link>
            <Link href="/employee/profile">Employee Profile</Link>
        </div>
    )
}

export default EmployeeNavbar
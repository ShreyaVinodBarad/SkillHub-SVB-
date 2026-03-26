import Link from "next/link"

const AdminNavbar = () => {
    return (
        <div className="bg-red-400 p-4 flex gap-4">
            <Link href="/admin">Admin Dashboard</Link>
            <Link href="/admin/todo">Admin ToDo</Link>
        </div>
    )
}

export default AdminNavbar
import { Link } from "react-router-dom"

const AdminNavBar = () => {
    return (
        <div>
            <Link to="/admin">Admin Dashboard</Link>
            <Link to="/admin/todo">Admin ToDo</Link>
        </div>
    )
}

export default AdminNavBar
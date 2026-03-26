import { Link } from "react-router-dom"

const EmployeeNavBar = () => {
    return (
        <div>
            <Link to="/employee">Employee</Link>
            <Link to="/employee/profile">Employee Profile</Link>
        </div>
    )
}

export default EmployeeNavBar
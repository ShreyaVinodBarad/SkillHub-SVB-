import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const AdminNavBar = () => {
    const { auth, setAuth } = useContext(AuthContext)
    const handleLogOut = () => {
        localStorage.removeItem("auth")
        setAuth(null)
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Admin Panel
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/admin" class="nav-link active" href="#">
                                Dashboard
                            </Link>
                            <Link to="/admin/employee" class="nav-link" href="#">
                                Employee
                            </Link>
                            <Link to="/admin/todo" class="nav-link" href="#">
                                Admin TO-Do
                            </Link>
                        </div>
                    </div>
                    {
                        auth && <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                Welcome {auth.name}
                            </button>
                            <ul class="dropdown-menu">
                                {/* <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li> */}
                                <li>
                                    <button onClick={handleLogOut} class="dropdown-item text-danger" href="#">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default AdminNavBar
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { logout } from "../../redux/slices/auth.slice"
const AdminNavBar = () => {
    const { tpo } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <nav class="navbar navbar-expand-lg bg-success navbar-dark">
            <div class="container-fluid">
                <Link to="/admin" class="navbar-brand" href="#">
                    Admin Panel
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active" href="#">
                            Admin Students
                        </Link>
                        <Link to="/admin/company" class="nav-link" href="#">
                            Admin Company
                        </Link>
                        <Link to="/admin/jobs" class="nav-link" href="#">
                            Admin Jobs
                        </Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome {tpo.name}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <button
                                class="dropdown-item text-danger fw-bold"
                                href="#"
                                // 👇 here logout("tpo") is going inside payload of auth.slice.js file
                                onClick={() => dispatch(logout("tpo"))}
                            >
                                LogOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavBar
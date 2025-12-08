import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signout } from '../redux/slices/auth.slice'
const AdminNavbar = () => {
    const { admin } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/admin" class="navbar-brand" href="#">
                        Admin Navbar
                    </Link>
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
                                ToDo
                            </Link>
                        </div>
                    </div>
                    {
                        admin && <div class="dropdown">
                            <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                Welcome {admin.name}!
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <button class="dropdown-item text-danger" href="#" onClick={() => dispatch(signout())}>
                                        Log Out
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

export default AdminNavbar
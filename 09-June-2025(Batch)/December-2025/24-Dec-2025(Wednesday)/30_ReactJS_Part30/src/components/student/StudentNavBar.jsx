import React from 'react'
import { Link } from "react-router-dom"
const StudentNavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container-fluid">
                <Link to="/student" class="navbar-brand" href="#">
                    Student Panel
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/student" class="nav-link active" href="#">
                            Student Profile
                        </Link>
                        <Link to="/student/jobs" class="nav-link" href="#">
                            Student Jobs
                        </Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <button class="dropdown-item text-danger fw-bold" href="#">
                                LogOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default StudentNavBar
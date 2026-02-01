import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Employee Navbar
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/employee" class="nav-link active" href="#">
                                EmployeeDashboard
                            </Link>
                            <Link to="/employee/profile" class="nav-link" href="#">
                                EmployeeProfile
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default EmployeeNavbar
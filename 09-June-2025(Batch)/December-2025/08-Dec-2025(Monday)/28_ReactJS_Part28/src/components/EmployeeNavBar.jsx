import React from 'react'
import { Link } from "react-router-dom"
const EmployeeNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/employee" class="navbar-brand" href="#">
                        Employee Navbar
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/employee" class="nav-link active" href="#">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default EmployeeNavBar
import React from 'react'
import { Link } from "react-router-dom"
const CompanyNavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-warning navbar-light">
            <div class="container-fluid">
                <Link to="/company" class="navbar-brand" href="#">
                    Company NavBar
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/company" class="nav-link active" href="#">
                            Company Jobs
                        </Link>
                        <Link to="/company/applications" class="nav-link" href="#">
                            Company Applications
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

export default CompanyNavBar
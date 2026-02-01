import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Admin Navbar
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/admin" class="nav-link active" href="#">
                                Dashboard
                            </Link>
                            <Link to="/admin/profile" class="nav-link" href="#">
                                AdminProfile
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar
import React from 'react'
import { Link } from "react-router-dom"
const PublicNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">Public Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" href="#">
                                Home
                            </Link>
                            <Link to="/login" class="nav-link" href="#">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default PublicNavBar
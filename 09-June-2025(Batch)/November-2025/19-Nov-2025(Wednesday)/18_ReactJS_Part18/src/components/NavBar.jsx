import React from 'react'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Auth Context
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" href="#">
                                Home
                            </Link>
                            <Link to="/register" class="nav-link active" href="#">
                                Register
                            </Link>
                            <Link to="/login" class="nav-link" href="#">
                                Login
                            </Link>
                            <Link to="/admin" class="nav-link" href="#">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
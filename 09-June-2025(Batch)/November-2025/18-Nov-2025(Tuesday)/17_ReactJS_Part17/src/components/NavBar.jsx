import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Context and Props Drilling
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" href="#">
                                Home
                            </Link>
                            <Link to="/context" class="nav-link" href="#">
                                Learn Context
                            </Link>
                            <Link to="/props" class="nav-link" href="#">
                                Props Drilling
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
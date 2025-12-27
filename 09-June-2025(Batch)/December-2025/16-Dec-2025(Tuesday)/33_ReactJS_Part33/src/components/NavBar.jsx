import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand" href="#">
                    RTK Basic
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" href="#">
                            Home
                        </Link>
                        <Link to="/todo" class="nav-link" href="#">ToDo</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
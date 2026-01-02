import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">
                        Hooks
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" href="#">
                                State
                            </Link>
                            <Link to="/effect" class="nav-link" href="#">
                                Effect
                            </Link>
                            <Link to="/context" class="nav-link" href="#">
                                Context
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default NavBar
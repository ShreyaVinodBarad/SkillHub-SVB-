import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Learn Routing, Effect and API
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active" href="#">
                                <button className='btn btn-secondary'>
                                    Home
                                </button>
                            </Link>
                            <Link to="/effect" class="nav-link" href="#">
                                <button className='btn btn-secondary'>
                                    LearnEffect
                                </button>
                            </Link>
                            <Link to="/api" class="nav-link" href="#">
                                <button className='btn btn-secondary'>
                                    LearnAPI
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from 'react'
import { Link } from "react-router-dom"
const NavBar = ({ authHandler }) => {
    const { auth, setAuth } = authHandler
    const handleLogOut = () => {
        localStorage.removeItem("user")
        setAuth(null)
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Practice Authentication
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {
                                auth
                                    ?
                                    <Link to="/admin" class="nav-link" href="#">
                                        Dashboard
                                    </Link>
                                    : <>
                                        <Link to="/" class="nav-link active" href="#">
                                            Home
                                        </Link>
                                        <Link to="/register" class="nav-link" href="#">
                                            Register
                                        </Link>
                                        <Link to="/login" class="nav-link" href="#">
                                            Login
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                    {
                        auth && <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                {auth.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <button onClick={handleLogOut} class="dropdown-item" href="#">
                                        LogOut
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar
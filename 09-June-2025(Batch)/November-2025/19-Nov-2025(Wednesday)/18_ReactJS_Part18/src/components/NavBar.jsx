import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../App'
const NavBar = () => {
    const { auth, setAuth } = useContext(AuthContext)
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
                                        <Link to="/register" class="nav-link active" href="#">
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
                        // 👇 If there is something in auth than this print dropdown.
                        auth && <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                {auth.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    {/* <button type="button" class="dropdown-item text-danger" onClick={() => setAuth()}>
                                        LogOut
                                    </button> */}
                                    {/* 
                                    👆 If there is nothing in auth than i.e., null than go to login in page. And if there is object than show dashboard page.
                                    */}
                                    <button type="button" class="dropdown-item text-danger" onClick={() => {
                                        localStorage.removeItem("auth")
                                        setAuth(null)
                                    }}>
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
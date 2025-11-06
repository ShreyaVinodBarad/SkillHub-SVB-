import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ isLogin, setIsLogin }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Practice Routing</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {
                                isLogin
                                    ?
                                    <Link to='/admin' class="nav-link" href="#">Admin</Link>
                                    :
                                    <>
                                        <Link to='/' class="nav-link active" href="#">Home</Link>
                                        <Link to='/reach-us' class="nav-link" href="#">Contact</Link>
                                        <Link to='/login' class="nav-link" href="#">Login</Link>
                                        <Link to='/effect' class="nav-link" href="#">Effect</Link>
                                    </>
                            }
                        </div>
                    </div>
                    {
                        isLogin && <button type="button" class="btn btn-danger" onClick={() => setIsLogin(false)}>Log Out</button>
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar
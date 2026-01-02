import React from 'react'
import { Link } from 'react-router-dom'
import { publicRoutes } from '../Routes/AllRoutes'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">
                        React Lazy Loading
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {
                                publicRoutes.map(item => <Link to={item.path} className='nav-link'>{item.label}</Link>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
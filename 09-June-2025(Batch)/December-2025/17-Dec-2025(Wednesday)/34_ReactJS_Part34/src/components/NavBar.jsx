import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { cart } = useSelector(state => state.skillhub)
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    RTK Practice
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav w-100 d-flex justify-content-end align-items-center">
                        <Link to="/" class="nav-link active" href="#">
                            Home
                        </Link>
                        <Link to="/products" class="nav-link" href="#">
                            Products
                        </Link>
                        <Link to="/cart" class="nav-link" href="#">
                            Cart
                        </Link>
                    </div>
                    <div className='text-dark ms-3 d-flex'>
                        <i className='bi bi-cart'></i>
                        <span className='ms-1'>{cart.length}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
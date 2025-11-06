import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" href="#">Home</Link>
                            <Link to="/about" className="nav-link" href="#">About</Link>
                            <Link to="/contact" className="nav-link" href="#">Contact</Link>
                            <Link to="/album" className="nav-link" href="#">Gallery</Link>
                            <Link to="/account" className="nav-link" href="#">Account</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

const AuthorNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Author Panel
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/author" class="nav-link active" href="#">
                                Author Dashboard
                            </Link>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome Author
                        </button>
                        <ul class="dropdown-menu">
                            {/* <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li> */}
                            <li>
                                <button class="dropdown-item text-bg-danger" href="#">
                                    <i className="bi bi-box-arrow-in-left"></i> Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AuthorNavBar
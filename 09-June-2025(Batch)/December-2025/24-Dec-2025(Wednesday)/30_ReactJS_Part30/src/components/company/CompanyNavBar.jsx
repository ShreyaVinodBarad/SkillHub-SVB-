import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { logout } from "../../redux/slices/auth.slice"
const CompanyNavBar = () => {
    const { company } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <nav class="navbar navbar-expand-lg bg-warning navbar-light">
            <div class="container-fluid">
                <Link to="/company" class="navbar-brand" href="#">
                    Company Panel
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/company" class="nav-link active" href="#">
                            Company Jobs
                        </Link>
                        <Link to="/company/applications" class="nav-link" href="#">
                            Company Applications
                        </Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        <img src={company.logo} style={{ height: "30px", borderRadius: "50%" }} alt="Logo" className='me-2' />
                        {company.name}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <button
                                class="dropdown-item text-danger fw-bold"
                                href="#"
                                onClick={() => dispatch(logout("company"))}
                            /*
                            👆 
                            logout(payload) => auth.slice.js
                            payload => company
                            */
                            >
                                LogOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default CompanyNavBar
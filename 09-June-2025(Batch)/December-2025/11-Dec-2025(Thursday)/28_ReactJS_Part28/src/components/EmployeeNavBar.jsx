import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { empSignOut } from '../redux/slices/auth.slice'
const EmployeeNavBar = () => {
    const { employee } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-success navbar-dark">
                <div class="container-fluid">
                    <Link to="/employee" class="navbar-brand" href="#">
                        Employee Navbar
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/employee" class="nav-link active" href="#">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                    {
                        employee && <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                <img src={employee.photo} style={{ height: "35px", width: "35px", borderRadius: "50%", objectFit: "cover" }} />
                                <span className='ms-3'>{employee.name}</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button class="dropdown-item text-danger" href="#" onClick={() => dispatch(empSignOut())}>
                                        Log Out
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

export default EmployeeNavBar
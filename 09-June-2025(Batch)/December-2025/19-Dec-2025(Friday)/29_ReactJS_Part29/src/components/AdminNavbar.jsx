import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from "../redux/slices/auth.slice"
const AdminNavbar = () => {
    const { admin } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-light navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" >RTK Admin Panel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" >Dashboard</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome {admin.name}!
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item text-danger" href="#" onClick={() => dispatch(signout())}>
                            Log Out
                        </button></li>
                        {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar
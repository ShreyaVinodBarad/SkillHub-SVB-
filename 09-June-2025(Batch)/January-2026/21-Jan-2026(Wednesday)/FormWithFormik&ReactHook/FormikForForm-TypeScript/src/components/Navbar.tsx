import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light w-100">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Formik for Form
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">
                            Home
                        </Link>
                        <Link to="/register" className="nav-link">
                            Register
                        </Link>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/todo">ToDo</Link>
        </div >
    )
}

export default Navbar
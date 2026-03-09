import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-danger navbar-dark">
                <Container fluid>
                    {/* 
                            👆
                    1) How to Use Container Fluid?
                    - You do NOT import it separately.
                    - fluid is just a prop of Container.
                    */}
                    <Navbar.Brand href="/admin">
                        Admin Panel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/admin" className='nav-link'>
                                Dashboard
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AdminNavBar
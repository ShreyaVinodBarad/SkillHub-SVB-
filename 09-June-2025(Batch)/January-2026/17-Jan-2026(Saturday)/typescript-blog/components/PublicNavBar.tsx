import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const PublicNavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-success navbar-dark">
                <Container fluid>
                    {/* 
                            👆
                    1) How to Use Container Fluid?
                    - You do NOT import it separately.
                    - fluid is just a prop of Container.
                    */}
                    <Navbar.Brand href="/">
                        TypeScript Blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className='nav-link'>
                                Home
                            </Link>
                            <Link to="/signup" className='nav-link'>
                                Register
                            </Link>
                            <Link to="/signin" className='nav-link'>
                                Login
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default PublicNavBar
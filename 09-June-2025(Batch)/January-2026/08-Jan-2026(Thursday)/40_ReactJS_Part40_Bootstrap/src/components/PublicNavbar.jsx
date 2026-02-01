import React from 'react'
import { publicRoutes } from '../routes/AppRoutes'
import { Container, Nav, Navbar } from 'react-bootstrap'

const PublicNavbar = () => {
    return (
        <div>
            <Navbar data-bs-theme="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
                    <Nav className='mx-auto'>
                        {
                            publicRoutes.map(item => <Nav.Link
                                href={item.path}
                            >
                                {item.label}
                            </Nav.Link>)
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default PublicNavbar
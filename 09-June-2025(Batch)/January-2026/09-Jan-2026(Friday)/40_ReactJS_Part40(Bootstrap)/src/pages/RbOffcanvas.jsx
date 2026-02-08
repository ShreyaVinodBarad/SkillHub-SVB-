import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const RbOffcanvas = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>
                RbOffcanvas
            </h1>
            <Button variant="warning" onClick={() => setShow(pre => !pre)}>
                Show Offcanvas
            </Button>
            <Offcanvas show={show} onHide={() => setShow(false)} placement='bottom'>
                <Offcanvas.Header closeButton>
                    Offcanvas Header
                </Offcanvas.Header>
                <Offcanvas.Body>Offcanvas Body</Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default RbOffcanvas
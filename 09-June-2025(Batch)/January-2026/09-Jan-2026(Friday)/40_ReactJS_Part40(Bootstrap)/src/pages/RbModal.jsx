import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const RbModal = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>RbModal</h1>
            <Button variant="success" onClick={() => setShow(true)}>
                Show Modal
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>Modal Header</Modal.Header>
                <Modal.Body>Modal Body</Modal.Body>
                <Modal.Footer>Modal Footer</Modal.Footer>
            </Modal>
        </div>
    )
}

export default RbModal
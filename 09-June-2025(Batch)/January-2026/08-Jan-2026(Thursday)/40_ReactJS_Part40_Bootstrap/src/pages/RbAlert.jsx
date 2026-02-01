import React from 'react'
import { Alert } from 'react-bootstrap'

const RbAlert = () => {
    return (
        <div>
            <h1>Alert</h1>
            <Alert dismissible>Primary</Alert>
            <Alert variant='danger' dismissible>Danger</Alert>
        </div>
    )
}

export default RbAlert
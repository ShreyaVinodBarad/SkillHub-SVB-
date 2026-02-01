import React from 'react'
import { Card } from 'react-bootstrap'

const RbCard = () => {
    return (
        <div>
            <h1>RbCard</h1>
            <Card>
                <Card.Header>Card Header</Card.Header>
                <Card.Body>Card Body</Card.Body>
                <Card.Footer>Card Footer</Card.Footer>
            </Card>
        </div>
    )
}

export default RbCard
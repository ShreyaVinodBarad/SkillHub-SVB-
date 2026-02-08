import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const RbListGroup = () => {
    return (
        <div>
            <Card>
                <Card.Header>Fruits Name</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroupItem active>
                            Apple - Keeps Doctor Away!
                        </ListGroupItem>
                        <ListGroupItem>Banana</ListGroupItem>
                        <ListGroupItem>Grapes</ListGroupItem>
                        <ListGroupItem>Watermelon</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RbListGroup
import React from 'react'
import Card from './Card'

const LearnChildComponent = () => {
    // Compound Components
    return (
        <div>
            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>Body</Card.Body>
                <Card.Footer>Footer</Card.Footer>
            </Card>
        </div>
    )
}

export default LearnChildComponent
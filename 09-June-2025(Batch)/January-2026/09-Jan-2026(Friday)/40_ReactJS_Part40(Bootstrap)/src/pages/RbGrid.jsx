import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

const RbGrid = () => {
    return (
        <div>
            <Container className='mt-3'>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header>Login Header</Card.Header>
                            <Card.Body>Login Form</Card.Body>
                            <Card.Footer>Login Footer</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Row>
                    <Col sm={4} md={12} lg={3}>
                        <Alert variant='primary'>Primary</Alert>
                    </Col>
                    <Col sm={4} md={6} lg={3}>
                        <Alert variant='danger'>Danger</Alert>
                    </Col>
                    <Col sm={4} md={6} lg={3}>
                        <Alert variant='warning'>Warning</Alert>
                    </Col>
                    <Col sm={12} md={12} lg={3}>
                        <Alert variant='success'>Success</Alert>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RbGrid
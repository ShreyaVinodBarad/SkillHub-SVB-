import React from 'react'
import { Alert, Card, Col, Container, FloatingLabel, Form, FormFloating, Row } from 'react-bootstrap'

const RbForm = () => {
    return (
        <div>
            <Container className='my-3'>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header className='p-0'>
                                <Alert variant='primary' className='m-0 rounded-0 text-center'>
                                    <h5>
                                        React Bootstrap Form
                                    </h5>
                                </Alert>
                            </Card.Header>
                            <Card.Body>
                                <Form.Control placeholder='Enter name...'>
                                </Form.Control>

                                <Form.Control placeholder='Enter age...' type='number' className='mt-3'>
                                </Form.Control>

                                <Form.Control placeholder='Enter password...' type='password' className='mt-3'>
                                </Form.Control>

                                <Form.Control placeholder='Enter DOB...' type='date' className='mt-3'>
                                </Form.Control>

                                <Form.Control as="textarea" placeholder='Enter your hobbies...' className='mt-3'>
                                </Form.Control>

                                <Form.Select className='mt-3'>
                                    <option>Choose city...</option>
                                    <option>Pune</option>
                                    <option>Mumbai</option>
                                    <option>Hyderabad</option>
                                </Form.Select>

                                <Form.Check type='radio' label="Female" name='gender' className='mt-3' id='Female'>
                                </Form.Check>
                                <Form.Check type='radio' label="Male" name='gender' className='mt-1 mb-3' id='Male'>
                                </Form.Check>

                                {
                                    ["ReactJS", "JavaScript", "HTML", "CSS", "Bootstrap"].map(item => <Form.Check type='checkbox' id={item} label={item} className='mt-1'>
                                    </Form.Check>)
                                }

                                <h4 className='mt-4'>Floating Input</h4>
                                <FloatingLabel label="First Name">
                                    <Form.Control type="text" placeholder="First Name"></Form.Control>
                                    {/* 👆 placeholder must exist, but it should match the label */}
                                </FloatingLabel>

                                <Form.Control placeholder='Enter name...' isValid={true} className='mt-3'></Form.Control>

                                <Form.Control placeholder='Enter name...' isInvalid={true} className='mt-3'></Form.Control>
                                <Form.Control.Feedback type='invalid'>
                                    Name is Required!
                                </Form.Control.Feedback>

                                <h4 className='mt-4'>Input Size</h4>
                                <Form.Control placeholder='Enter name...' size='lg' className='mt-3'></Form.Control>
                                <Form.Control placeholder='Enter name...' className='mt-3'></Form.Control>
                                <Form.Control placeholder='Enter name...' size='sm' className='mt-3'></Form.Control>

                                <Form.Check type='switch' id='Motivation' label="Motivation" className='mt-3'></Form.Check>
                                <Form.Check type='switch' id='Test' label="Test" className='mt-1'></Form.Check>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default RbForm
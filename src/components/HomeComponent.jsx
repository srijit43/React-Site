import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import myPic from './../resources/images/my_pic.png';

function HomeComponent() {
    return (
        <Container className='poppin-font  mt-4'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className='text-center'>
                            <img src={myPic} alt="Logo"  style={{height:300, width:300}}/>
                            <Card.Title><h1>Srijit Bhattacharya</h1></Card.Title>
                            <hr />
                            <Card.Text>
                                <p>Data Scientist living in LA, 
                                    and have expertise in 
                                     &nbsp;<span class="badge bg-dark">python</span>
                                    ,&nbsp;<span class="badge bg-dark">ML</span>, 
                                    &nbsp;<span class="badge bg-dark">SQL</span>.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

        </Container>
    );
}


export default HomeComponent;


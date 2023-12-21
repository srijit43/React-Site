import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Education() {
    return (
        <Container className='poppin-font  mt-4'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className='text-center'>
                            <Card.Title><h1>Education</h1></Card.Title>
                            <hr />
                            <Card.Text>
                                <Container className='poppin-font'>
                                    <Row>
                                        <Col>
                                            <p>California State Polytechnic University, Pomona</p>
                                            <i>Master of Science, Computer Science</i>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <p>Maulana Abul Kalam Azad University of Technology, India</p>
                                            <i>Bachelors of Technology, Information Technology</i>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Education;
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Skills() {
    return (
        <Container className='poppin-font  mt-4'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className='text-center'>
                            <Card.Title><h1>Skills</h1></Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    <h1>These are my skills</h1>  
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Skills;

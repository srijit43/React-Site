import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import programmingIcon from './../resources/images/programming_icon.png';
import databaseIcon from './../resources/images/database_icon.png';
import toolsIcon from './../resources/images/tools_icon.png';


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
                                <div>
                                    <img className='inline-class' src={programmingIcon} alt="Logo" style={{ height: 50, width: 50 }} />
                                    <h3 className='inline-class middle-verticle'>Programming Languages</h3>
                                    <div className='p-1'>
                                        <span class="badge bg-dark m-1">Java</span>
                                        <span class="badge bg-dark m-1">Python</span>
                                        <span class="badge bg-dark m-1">C++</span>
                                        <span class="badge bg-dark m-1">SQL</span>
                                    </div>
                                </div>
                                <div>
                                    <img className='inline-class' src={databaseIcon} alt="Logo" style={{ height: 40, width: 40 }} />
                                    <h3 className='inline-class middle-verticle'>Database Managements</h3>
                                    <div className='p-1'>
                                        <span class="badge bg-dark m-1">Postgresql</span>
                                        <span class="badge bg-dark m-1">SSMS</span>
                                        <span class="badge bg-dark m-1">AWS RDS</span>
                                    </div>
                                </div>
                                <div>
                                    <img className='inline-class' src={toolsIcon} alt="Logo" style={{ height: 35, width: 35 }} />
                                    <h3 className='inline-class middle-verticle'>Tools and Technologies</h3>
                                    <div className='p-1'>
                                        <span class="badge bg-dark m-1">Visual Studio Code</span>
                                        <span class="badge bg-dark m-1">Power BI</span>
                                        <span class="badge bg-dark m-1">Flask</span>
                                        <span class="badge bg-dark m-1">Spring Boot</span>
                                        <span class="badge bg-dark m-1">Pycharm</span>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}

export default Skills;

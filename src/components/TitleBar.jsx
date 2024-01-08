import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from "react-router-dom";

function TitleBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary poppin-font">
          <Container>
            <Navbar.Brand href="/">Data Guy Srijit</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link className="navlink" to={`home`}>Home</Link></Nav.Link>
                <Nav.Link><Link className="navlink" to={`skills`}>Skills</Link></Nav.Link>
                <Nav.Link><Link className="navlink" to={`education`}>Education</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
  
export default TitleBar;
  
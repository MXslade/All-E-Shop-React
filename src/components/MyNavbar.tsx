import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Link to={'/'}><Navbar.Brand><i className="fab fa-react"></i>{' '}React-Shop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="ENG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">RUS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KAZ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#basket"><i className="fas fa-shopping-basket"></i>{' '}Basket</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar;

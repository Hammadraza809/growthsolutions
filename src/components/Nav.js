import React from "react";
import "./Nav.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          Growth Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="nav">
            <Nav.Link className="nav-link" href="#deets">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#memes">
              Services
            </Nav.Link>
            <Nav.Link className="nav-link" href="#memes">
              About Us
            </Nav.Link>
            <Nav.Link className="nav-link contact-us" href="#memes">
              Get A Quote
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

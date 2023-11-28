import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const NavbarComponent = () => {
  return ( 
    <Navbar sticky="top" bg="white" expand="lg" className="justify-content-end">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo22.png"
            height="45"
            className="d-inline-block align-top"
            alt="Kimipay logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink to="/about" className="nav-link" activeclassname="active">
              About Us
            </NavLink>
            <NavLink to="/help-&-support" className="nav-link" activeclassname="active">
              Help & Support
            </NavLink>
            <NavLink to="/resources" className="nav-link" activeclassname="active">
              Resources
            </NavLink>
          </Nav>
          <Link to="/registration">
            <Button variant="outline-primary" className="rounded-pill" size="sm">
              Register Now!
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

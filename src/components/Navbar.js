import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";

const NavbarComponent = () => {
    return ( 
        <Navbar fixed="top" bg="light" expand="lg" className="justify-content-end">
            <Container>
                <Navbar.Brand href="#home">
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
                        <NavDropdown title="Services" id="basic-nav-dropdown" className="dropdown-title">
                            <NavDropdown.Item href="#">Send Funds</NavDropdown.Item>
                            <NavDropdown.Item href="#">Receive Funds</NavDropdown.Item>
                            <NavDropdown.Item href="#">Exchange Rates</NavDropdown.Item>
                            <NavDropdown.Item href="#">Fees & Pricing</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Us" id="basic-nav-dropdown" className="dropdown-title">
                            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
                            <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Help & Support" id="basic-nav-dropdown" className="dropdown-title">
                            <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#">Support Center</NavDropdown.Item>
                            <NavDropdown.Item href="#">Terms & Conditions/Privacy Policy</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id="basic-nav-dropdown" className="dropdown-title">
                            <NavDropdown.Item href="#">Currency Converter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="outline-primary" className="rounded-pill" size="sm">Register Now !</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
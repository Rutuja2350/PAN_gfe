import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = ({ activeSection, onNavClick }) => {
    return (
        <Navbar collapseOnSelect expand="lg" id="navbar" className="navbar-header">
            <Container className="nav-container">
                {/* <Navbar.Brand href="\">PAN</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="">
                    <Nav className="space-x-12">
                        <Nav.Link
                            onClick={() => onNavClick('WhatWeDo')}
                            className={activeSection === 'WhatWeDo nav_link' ? 'active-nav-link nav_link' : ''}
                        >
                            What We Do?
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('Experience')}
                            className={activeSection === 'Experience' ? 'active-nav-link' : ''}
                        >
                            Experience
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('Expertise')}
                            className={activeSection === 'Expertise' ? 'active-nav-link' : ''}
                        >
                            Expertise
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('AboutUs')}
                            className={activeSection === 'AboutUs' ? 'active-nav-link' : ''}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('Associates')}
                            className={activeSection === 'Associates' ? 'active-nav-link' : ''}
                        >
                            Associates
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('Commitment')}
                            className={activeSection === 'Commitment' ? 'active-nav-link' : ''}
                        >
                            Our Commitment
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => onNavClick('ContactUs')}
                            className={activeSection === 'ContactUs' ? 'active-nav-link' : ''}
                        >
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

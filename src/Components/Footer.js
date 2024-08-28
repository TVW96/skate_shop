// Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>BoardShop</h5>
                        <p>Your one-stop shop for all things boards!</p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#products" className="text-light">Products</Nav.Link>
                            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-light me-3" aria-label="Facebook">
                                <img src="" alt="" className=''/>
                            </a>
                            <a href="https://twitter.com" className="text-light me-3" aria-label="Twitter">
                                <img src="" alt="" className=''/>
                            </a>
                            <a href="https://instagram.com" className="text-light" aria-label="Instagram">
                                <img src="" alt="" className=''/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} BoardShop. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

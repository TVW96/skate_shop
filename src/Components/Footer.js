// Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

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
                            <Link to="/" className="text-light">Home</Link>
                            <Link to="/products" className="text-light">Products</Link>
                            <Link to="/contact" className="text-light">Contact</Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <div>
                            <Link to="https://facebook.com" className="text-light me-3" aria-label="Facebook">
                                <label><small>No Socials Yet</small></label>
                                <img src="" alt="" className='' />
                            </Link>
                            <Link to="https://twitter.com" className="text-light me-3" aria-label="Twitter">
                                <img src="" alt="" className='' />
                            </Link>
                            <Link to="https://instagram.com" className="text-light" aria-label="Instagram">
                                <img src="" alt="" className='' />
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} BoardShop. <i><small>All rights reserved.</small></i></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

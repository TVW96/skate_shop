import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "./Nav.scss";
import Logo from "../Assets/skate-logo.png";
import { Link } from 'react-router-dom';

function nav() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className="nav">
      <Container fluid>
        {/* Row 1 of my top navigation */}
        <Row className="align-items-md-center">
          <Col>
            <Stack direction="horizontal" gap={1}>
              <Link to="/">
                <img src={Logo} className="logo" alt="logo" />
              </Link>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <h1>The Board Shop</h1>
              </Link>
            </Stack>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <Form.Control style={{ width: '100%' }} placeholder="search for item here..." />
              <Button variant="secondary">Search</Button>
            </Stack>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </Stack>
          </Col>
        </Row>
        {/* Row 2 of top navigation */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p>Free shipping for orders over $99</p>
          </Col>
        </Row>
      </Container>
    </Nav >
  )
}

export default nav

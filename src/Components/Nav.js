import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Nav.scss";


import Logo from "../Assets/skate-logo.png";


function nav() {
  return (
    <nav>
      <Container fluid>
        {/* Row 1 of my top navigation */}
        <Row className="align-items-md-center">
          <Col>
            <Stack direction="horizontal" gap={1}>
              <img src={Logo} className="logo" alt="logo" />
              <h1>Board Shop</h1>
            </Stack>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="search for item here..." />
            <Button variant="secondary">Search</Button>
            </Stack>
          </Col>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <div className='p-2'>list item</div>
              <div className='p-2'>list item</div>
              <div className='p-2'>list item</div>
            </Stack>
          </Col>
        </Row>
        {/* Row 2 of top navigation */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p>Free shipping for orders over</p>
          </Col>
          <Col md="auto">
            <p>$99</p>
          </Col>
        </Row>

      </Container>


    </nav>
  )
}

export default nav

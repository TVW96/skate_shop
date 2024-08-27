import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "./Nav.scss";


function nav() {
  return (
    <Stack direction="horizontal" gap={3} className="nav">
      <Form.Control className="me-auto" placeholder="search for item here..." />
      <Button variant="secondary">Search</Button>
      <div className="vr" />
    </Stack>
  )
}

export default nav

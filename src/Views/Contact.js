import React from 'react';
import "./Contact.scss";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <div className='contact-desc'>
        <p> Looking to get in contact with us at The Board Shop?</p>
      </div>
      <div className='coffee'>
        <Button
          variant="primary"
          href="https://buymeacoffee.com/tw1996"
          style={{
            margin: "20px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "80px"
          }}>
          <p>Buy me a coffee! ☕️</p>
        </Button>
      </div>
    </div >
  )
}

export default Contact
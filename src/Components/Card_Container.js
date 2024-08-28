import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Deck1 from "../Assets/Deck1.jpg";

function Card_Container() {
  return (
    <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Deck1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Card_Container
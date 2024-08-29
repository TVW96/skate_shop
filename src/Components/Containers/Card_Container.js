import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Card_Container = ({ cards }) => {
    return (
        <Container className="my-4">
            <Row>
                {cards.map((card, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card style={{ padding: "10px", display: "flex", flexDirection: "column", height: "100%" }}>
                            <Card.Img variant="top" src={card.imgSrc} className="card-img" 
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "contain"
                             }}
                            />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.description}
                                </Card.Text>
                                <Button variant="primary" href={card.buttonLink}>
                                    {card.buttonText}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Card_Container;
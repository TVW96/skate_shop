import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {CartContext} from "../../CartContext";

const CardContainer = ({ cards }) => {
    const navigate = useNavigate();
    const handleClick = (card) => {
        // Pass the card data to the next page
        navigate("/product", { state: { card } });
    };
    const { cart, addToCart } = React.useContext(CartContext);

    const handleAddToCart = (e, card) => {
        if (e) e.preventDefault();
        try{
            addToCart(card);
            console.log("Added to cart:", card);
        } catch(err){
            console.log(err);
        }
        console.log("Cart", cart);
    }

    return (
        <Container className="my-4">
            <Row>
                {cards.map((card, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card style={{ padding: "10px", display: "flex", flexDirection: "column", height: "100%" }}>
                            <Card.Img variant="top" src={card.imgSrc} className="card-img" onClick={() => handleClick(card)}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "contain"
                                }}
                            />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <Button variant="primary" onClick={(e) => handleAddToCart(e, card)}>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardContainer;
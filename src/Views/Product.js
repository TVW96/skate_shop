import React from 'react';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap';
import './Product.scss';

function Product() {
    const location = useLocation();
    const card = location.state?.card;

    if (!card) {
        return <div>Product not found.</div>; // or redirect, show loading, etc.
    }

    return (
        <div className="product-details-container"> {/* Add a container for styling */}
            <Row>
                <Col md={6}>
                    <Card.Img variant="top" src={card.imgSrc} style={{ width: '100%', objectFit: 'contain' }} />
                </Col>
                <Col md={6} className="product-details">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Button variant="primary">Add to Cart</Button> {/* Or link to cart */}
                </Col>
            </Row>
        </div>
    );
}

export default Product;


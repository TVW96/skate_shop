import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Product.scss';
import {CartContext} from "../CartContext";
import {Link} from "react-router-dom";

function Product() {
    const location = useLocation();
    const card = location.state?.card;
    const [isHovered, setIsHovered] = useState(false);
    const { addToCart } = React.useContext(CartContext);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(card);
    }

    if (!card) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="product-details-container">
            <Row>
                <Col md={6}>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                Click to view full size
                            </Tooltip>
                        }
                    >
                        <Link to={card.imgSrc} target="_blank" rel="noopener noreferrer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Card.Img variant="top" src={card.imgSrc} style={{ width: '100%', objectFit: 'contain', cursor: isHovered ? 'zoom-in' : 'default' }} className='product-img' />
                        </Link>
                    </OverlayTrigger>
                </Col>
                <Col md={6} className="product-details">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Product;




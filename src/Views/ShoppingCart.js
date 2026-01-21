import React, { useContext } from 'react';
import "./ShoppingCart.scss";
import { CartContext } from "../CartContext";
import { Card, Button, Row, Col } from 'react-bootstrap';

function ShoppingCart() {
    const { cart, removeFromCart, clearCart, updateItemQuantity } = useContext(CartContext);

    return (
        <div className="layout">
            <h1 style={{fontFamily:"permanent-marker", fontSize:42, padding: 20}}>Shopping Cart</h1>
            <Row md={3} className="cart">
                {cart.length > 0 ? (
                    cart.map(product => (
                        <Col key={product.id}  md={4} className="mb-4">
                            <Card style={{ padding: "10px", display: "flex", flexDirection: "column", height: "100%" }}>
                                <Card.Img variant="top" src={product.url} alt={product.name} style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "contain"
                                }} />
                                <div className="details">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                                </div>
                                <Row md={2} className="d-flex justify-content-around m-3" style={{ padding: 10 }}>
                                    <Row md={3} style={{ padding: 10, gap:1, width: "90%" }} className="d-flex justify-content-around">
                                        <Button variant="outline-primary" style={{fontWeight:"bolder", }} onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                                        <Button variant="outline-primary" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                                    </Row>
                                    <Button variant="outline-secondary" onClick={() => removeFromCart(product.id)}>Remove</Button>
                                </Row>
                            </Card>
                        </Col>

                    ))
                ) : (
                    <h1 style={{fontSize: 32, padding: 40}}>Cart is Empty</h1>
                )}
                
                {cart.length > 0 && (
                    <Button variant="danger" className="d-flex justify-content-center m-auto mb-4 h-auto w-25" onClick={clearCart}>Clear Cart</Button>
                )}
            </Row>
            <div className="checkout">

            </div>
        </div>
    )
}

export default ShoppingCart;

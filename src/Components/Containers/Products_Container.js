import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "./Products_Container.scss";

const PRODUCTS_CONTAINER = ({ cards }) => {
    return (
        <Container className="products-container">
                    <Card style={{ 
                        padding: "10px", 
                        display: "flex", 
                        flexDirection: "row", 
                        height: "auto",
                        width: "auto",
                        flexWrap: "wrap",
                        justifyContent: "space-around" 
                    }}>

                        {cards.map((card, index) => (
                            <Card.Img key={index} variant="top" src={card.imgSrc} className="card-img" 
                            style={{
                            width: "150px",
                            height: "150px",
                            objectFit: "contain",
                            margin: "5px",
                            border: "0.5px solid gray"
                            }}/>
                        ))}
                    </Card>
        </Container>
    );
};

export default PRODUCTS_CONTAINER;
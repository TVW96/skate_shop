import React from 'react';
import Card_Container from "./Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';

import Deck1 from "../Assets/Deck1.jpg";
import Deck2 from "../Assets/Deck2.jpg";
import Deck3 from "../Assets/Deck3.jpg";

const Cards = () => {
  const cardData = [
    {
        imgSrc: Deck1,
        title: 'Faction - " The Hyper Vacation" Deck',
        description: 'This is a description for card 1.',
        buttonLink: '#',
        buttonText: 'Add to Cart'
    },
    {
        imgSrc: Deck2,
        title: 'Studio - "Beat Drop" Deck',
        description: 'This is a description for card 2.',
        buttonLink: '#',
        buttonText: 'Add to Cart'
    },
    {
        imgSrc: Deck3,
        title: 'Faction - "Flying Dogs" Deck',
        description: 'This is a description for card 3.',
        buttonLink: '#',
        buttonText: 'Add to Cart'
    }
];
  return (
    <div>
        <CardGroup>
            <Card_Container 
            cards={cardData}
            style={{marginTop: "20px"}} />
        </CardGroup>
    </div>
  )
}

export default Cards
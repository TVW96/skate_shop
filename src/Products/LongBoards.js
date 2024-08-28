import React from 'react';
import Card_Container from "../Components/Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';

import Deck1 from "../Assets/LandyYachtz_WolfShark.jpg";
import Deck2 from "../Assets/LandyYachtz_ Crane.jpg";
import Deck3 from "../Assets/LandyYachtz_SwitchBlade.jpg";

const Boards = () => {
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

export default Boards
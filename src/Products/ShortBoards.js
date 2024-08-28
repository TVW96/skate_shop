import React from 'react';
import Card_Container from "../Components/Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';

import Deck1 from "../Assets/blacklabel_elephant_block.jpg";
import Deck2 from "../Assets/polar_everything.jpg";
import Deck3 from "../Assets/powell_peralta_ripper.jpg";

const ShortBoards = () => {
  const cardData = [
    {
        imgSrc: Deck1,
        title: 'Blacklabel - " Elephant Block" Deck',
        description: 'This is a description for card 1.',
        buttonLink: '#',
        buttonText: 'Add to Cart'
    },
    {
        imgSrc: Deck2,
        title: 'Polar - "Everything" Deck',
        description: 'This is a description for card 2.',
        buttonLink: '#',
        buttonText: 'Add to Cart'
    },
    {
        imgSrc: Deck3,
        title: 'Powell Peralta - "Ripper" Deck',
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

export default ShortBoards
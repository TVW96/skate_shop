import React from 'react';
import Card_Container from "../Components/Containers/Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';

import BoardsData from "./BoardsData";

const Boards = () => {
  return (
    <div>
        <CardGroup>
            <Card_Container 
            cards={BoardsData}
            style={{marginTop: "20px"}} />
        </CardGroup>
    </div>
  )
}

export default Boards
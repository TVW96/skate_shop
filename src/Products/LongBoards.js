import React from 'react';
import Card_Container from "../Components/Containers/Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';

import LongBoardsData from "./LongBoardsData";

const LongBoards = () => {
  return (
    <div>
        <CardGroup>
            <Card_Container 
            cards={LongBoardsData}
            style={{marginTop: "20px"}} />
        </CardGroup>
    </div>
  )
}

export default LongBoards;
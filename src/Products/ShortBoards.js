import React from 'react';
import Card_Container from "../Components/Containers/Card_Container";
import CardGroup from 'react-bootstrap/CardGroup';
import ShortBoardsData from "./ShortBoardsData";

const ShortBoards = () => {
  return (
    <div>
        <CardGroup>
            <Card_Container 
            cards={ShortBoardsData}
            style={{marginTop: "20px"}} />
        </CardGroup>
    </div>
  )
}

export default ShortBoards
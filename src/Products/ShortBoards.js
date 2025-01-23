import React from 'react';
import CardContainer from "../Components/Containers/CardContainer";
import CardGroup from 'react-bootstrap/CardGroup';
import ShortBoardsData from "./ShortBoardsData";

const ShortBoards = () => {
  return (
    <div>
      <CardGroup>
        <CardContainer
          cards={ShortBoardsData}
          style={{ marginTop: "20px" }} />
      </CardGroup>
    </div>
  )
}

export default ShortBoards
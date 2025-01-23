import React from 'react';
import CardContainer from "../Components/Containers/CardContainer";
import CardGroup from 'react-bootstrap/CardGroup';

import LongBoardsData from "./LongBoardsData";

const LongBoards = () => {
  return (
    <div>
      <CardGroup>
        <CardContainer
          cards={LongBoardsData}
          style={{ marginTop: "20px" }} />
      </CardGroup>
    </div>
  )
}

export default LongBoards;
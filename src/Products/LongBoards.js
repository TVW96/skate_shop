import React from 'react';
import CardContainer from "../Components/Containers/CardContainer";
import CardGroup from 'react-bootstrap/CardGroup';

import LongBoardsData from "./LongBoardsData";

const LongBoards = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textDecoration: "underline", display: "flex", justifyContent: "center", textAlign: "center", width: "100%" }}>Long Boards</h2>
      <CardGroup>
        <CardContainer
          cards={LongBoardsData}
          style={{ marginTop: "20px" }} />
      </CardGroup>
    </div>
  )
}

export default LongBoards;
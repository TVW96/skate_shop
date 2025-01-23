import React from 'react';
import CardContainer from "../Components/Containers/CardContainer";
import CardGroup from 'react-bootstrap/CardGroup';
import ShortBoardsData from "./ShortBoardsData";

const ShortBoards = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textDecoration: "underline", display: "flex", justifyContent: "center", textAlign: "center", width: "100%" }}>Short Boards</h2>
      <CardGroup>
        <CardContainer
          cards={ShortBoardsData}
          style={{ marginTop: "20px" }} />
      </CardGroup>
    </div>
  )
}

export default ShortBoards
import React from 'react';
import CardContainer from "../Components/Containers/CardContainer";
import CardGroup from 'react-bootstrap/CardGroup';

import BoardsData from "./BoardsData";

const Boards = () => {
  return (
    <div>
      <CardGroup>
        <CardContainer
          cards={BoardsData}
          style={{ marginTop: "20px" }} />
      </CardGroup>
    </div>
  )
}

export default Boards
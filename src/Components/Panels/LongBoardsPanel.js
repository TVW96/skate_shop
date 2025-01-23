import React from 'react';
import ProductsContainer from '../Containers/ProductsContainer';
import CardGroup from 'react-bootstrap/CardGroup';
import LongBoardsData from '../../Products/LongBoardsData';


function ProductsLongBoards() {
  return (
    <div>
      <h2>Long Boards</h2>
      <CardGroup>
        <ProductsContainer
          cards={LongBoardsData}
          style={{ margin: "10px" }} />
      </CardGroup>
    </div>
  )
}

export default ProductsLongBoards;
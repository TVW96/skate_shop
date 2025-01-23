import React from 'react';
import ProductsContainer from '../Containers/ProductsContainer';
import CardGroup from 'react-bootstrap/CardGroup';
import ShortBoardsData from '../../Products/ShortBoardsData';


function ProductsShortBoards() {
  return (
    <div>
      <h2>Short Boards</h2>
      <CardGroup>
        <ProductsContainer
          cards={ShortBoardsData}
          style={{ margin: "10px" }} />
      </CardGroup>
    </div>
  )
}

export default ProductsShortBoards
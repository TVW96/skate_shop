import React from 'react';
import ProductsContainer from '../Containers/ProductsContainer';
import CardGroup from 'react-bootstrap/CardGroup';
import BoardsData from '../../Products/BoardsData';


function ProductsBoards() {
  return (
    <div>
      <h2>Boards</h2>
      <CardGroup>
        <ProductsContainer
          cards={BoardsData}
          style={{ margin: "10px" }} />
      </CardGroup>
    </div>
  )
}

export default ProductsBoards
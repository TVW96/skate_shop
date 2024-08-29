import React from 'react';
import Products_Container from '../Containers/Products_Container';
import CardGroup from 'react-bootstrap/CardGroup';
import LongBoardsData from '../../Products/LongBoardsData';


function Products_LongBoards() {
  return (
    <div>
        <h2>Long Boards</h2>
        <CardGroup>
            <Products_Container 
            cards={LongBoardsData}
            style={{margin: "10px"}} />
        </CardGroup>
    </div>
  )
}

export default Products_LongBoards;
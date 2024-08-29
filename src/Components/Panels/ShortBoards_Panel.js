import React from 'react';
import Products_Container from '../Containers/Products_Container';
import CardGroup from 'react-bootstrap/CardGroup';
import ShortBoardsData from '../../Products/ShortBoardsData';


function Products_ShortBoards() {
  return (
    <div>
      <h2>Short Boards</h2>
        <CardGroup>
            <Products_Container 
            cards={ShortBoardsData}
            style={{margin: "10px"}} />
        </CardGroup>
    </div>
  )
}

export default Products_ShortBoards
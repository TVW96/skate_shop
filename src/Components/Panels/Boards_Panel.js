import React from 'react';
import PRODUCTS_CONTAINER from '../Containers/Products_Container';
import CardGroup from 'react-bootstrap/CardGroup';
import BoardsData from '../../Products/BoardsData';


function Products_Boards() {
  return (
    <div>
        <h2>Boards</h2>
        <CardGroup>
            <PRODUCTS_CONTAINER
            cards={BoardsData}
            style={{margin: "10px"}} />
        </CardGroup>
    </div>
  )
}

export default Products_Boards
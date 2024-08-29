import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Products_Boards from '../Components/Panels/Boards_Panel';
import Products_ShortBoards from '../Components/Panels/ShortBoards_Panel';
import Products_LongBoards from '../Components/Panels/LongBoards_Panel';
import ShopNav from "../Components/ShopNav";
import "./Products.scss";

function Products() {
  return (
    <div className="Products">

      <ShopNav />

      <div className="shop-page">
        <div className='products-title'>
          <h1>Decks</h1>
        </div>
        <div className='products-section'>
          <Row className='categories'>
            <Col className='boards'>
              <Products_Boards />
            </Col>
            <Col className='shortBoards'>
              <Products_ShortBoards />
            </Col>
            <Col className="longBoards">
              <Products_LongBoards />
            </Col>
          </Row>
        </div>
        <div className='products-title'>
          <h1>Sun-Glasses</h1>
        </div>
      </div>
    </div>
  )
}

export default Products;
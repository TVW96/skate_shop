import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductsBoards from '../Components/Panels/BoardsPanel';
import ProductsShortBoards from '../Components/Panels/ShortBoardsPanel';
import ProductsLongBoards from '../Components/Panels/LongBoardsPanel';
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
              <ProductsBoards />
            </Col>
            <Col className='shortBoards'>
              <ProductsShortBoards />
            </Col>
            <Col className="longBoards">
              <ProductsLongBoards />
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
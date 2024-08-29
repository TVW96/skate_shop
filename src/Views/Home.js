import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss";

import Boards from "../Products/Boards";      
import ShortBoards from "../Products/ShortBoards";
import LongBoards from "../Products/LongBoards";

import ShopNav from "../Components/ShopNav";
import BoardIcon from "../Assets/skateboard_icon.png";
import RampIcon from "../Assets/ramp_icon.png";

function Home() {
  return (
    <div className="Home">
      <ShopNav />
      <Container fluid className="shop-page">
        <Row className="justify-content-md-center">


          {/* Products */}
          <Col md={{ span: 0}}
            className="content"
            style={{ marginBottom: '20px', marginTop: '20px'}}>

            {/* Header */}
            <h1>The Board Shop</h1>
            <h1 style={{fontSize: '18px', marginBottom: '-30px'}}> <br/> the place to shop for boards when your board.</h1>
            {/* Hero  */}
            <Row className="Hero">
              <Col xs="auto"> <img src={RampIcon} alt="" className="ramp-icon-left"/></Col>
              <Col md="auto"><img src={BoardIcon} alt="" className="board-icon"/></Col>
              <Col xs="auto"> <img src={RampIcon} alt="" className="ramp-icon-right"/></Col>
            </Row>
            {/* Row 1 */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ margin: "20px"}}>
                <h2 style={{ textDecoration: "underline"}}> Boards</h2>
                < Boards />
              </Col>
            </Row>

            {/* Row 2 */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ margin: "20px"}}>
                <h2 style={{ textDecoration: "underline"}}> Short Boards</h2>
                < ShortBoards />
              </Col>
            </Row>

            {/* Row 3 */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ margin: "20px"}}>
                <h2 style={{ textDecoration: "underline"}}> Long Boards</h2>
                < LongBoards />
              </Col>
            </Row>

          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default Home;

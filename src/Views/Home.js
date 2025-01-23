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
          <Col md={{ span: 0 }}
            className="content"
            style={{ marginBottom: '20px', marginTop: '20px' }}>

            {/* Header */}
            <h1>The Board Shop</h1>
            <h1 style={{ fontSize: '18px', marginBottom: '-30px' }}> <br /> the place to shop for boards when your board.</h1>

            {/* Hero  */}
            <Row className="Hero">
              <Col xs="auto"> <img src={RampIcon} alt="" className="ramp-icon-left" /></Col>
              <Col md="auto"><img src={BoardIcon} alt="" className="board-icon" /></Col>
              <Col xs="auto" style={{ overflow: "hidden" }}> <img src={RampIcon} alt="" className="ramp-icon-right" /></Col>
            </Row>

            {/* Row 1 - Boards*/}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ padding: "20px" }}>
                < Boards />
              </Col>
            </Row>

            {/* Row 2- Short Boards */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ padding: "20px" }}>
                < ShortBoards />
              </Col>
            </Row>

            {/* Row 3 - Long Boards*/}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ padding: "20px" }}>
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

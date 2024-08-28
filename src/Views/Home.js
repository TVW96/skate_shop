import Cards from "../Components/Cards";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss";

import Boards from "../Products/Boards";
import ShortBoards from "../Products/ShortBoards";
import LongBoards from "../Products/LongBoards";

import ShopNav from "../Components/ShopNav";

function Home() {
  return (
    <div className="Home">
      <ShopNav />
      <Container fluid className="shop-page">
    {/* Row 1 */}
        <Row className="justify-content-md-center">
          <Col md={{ span: 0}}
            className="content"
            style={{ marginBottom: '20px', marginTop: '20px'}}>
            <h1>The Board Shop</h1>
            <h1 style={{fontSize: '18px'}}> <br/> the place to shop for boards when your board.</h1>

    {/* Row 2 */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ margin: "20px"}}>
                <h2 style={{ textDecoration: "underline"}}> Boards</h2>
                < Boards />
              </Col>
            </Row>

    {/* Row 3 */}
            <Row className="justify-content-md-center">
              <Col md="auto" style={{ margin: "20px"}}>
                <h2 style={{ textDecoration: "underline"}}> Short Boards</h2>
                < ShortBoards />
              </Col>
            </Row>

    {/* Row 4 */}
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

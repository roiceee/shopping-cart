import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Home() {
  return (
    <Container fluid>
      <Row id="home-main" className="text-white text-center">
        <div
          className="bg-dark bg-opacity-50 align-items-center d-flex align-items-center justify-content-center"
          id="home-main-text-container"
        >
          <div>
            <h1>AquaShop</h1>
            <h4>Delve into the world of ornamental fish keeping.</h4>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Home;

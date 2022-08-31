import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./home-main.scss";
import fishImage from "./images/homepage-shop-fish.avif";
import aquariumImage from "./images/homepage-shop-aquarium.avif"
import HomeRow from "./home-row";

function Home() {
  return (
    <Container fluid id="home-main" className="text-light">
      <Row className="text-center home-text-container">
        <div>
          <h1>AquaShop</h1>
          <h4>Delve into the world of ornamental fish keeping.</h4>
        </div>
      </Row>
      <HomeRow
        image={fishImage}
        title="Fish"
        description="From bettas to kois, we offer a wide variety of ornamental fish suitable for your
            home and outdoor ponds and aquariums!"
      />
      <HomeRow
        image={aquariumImage}
        title="Aquariums"
        description="Premium housing for your beloved fishes!"
      />
    </Container>
  );
}

export default Home;

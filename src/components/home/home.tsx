import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./home-main.scss";
import fishImage from "./images/homepage-shop-fish.avif";
import backgroundImage from "./images/homepage-main.jpg";
import aquariumImage from "./images/homepage-shop-aquarium.avif";
import HomeRow from "./home-row";

function Home() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#293241";
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    return () => {
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "none";
    };
  }, []);

  return (
    <Container fluid id="home-main" className="text-light">
      <Row className="text-center home-text-container">
        <div>
          <h1>AquaShop</h1>
          <h4>Delve into the world of ornamental fish keeping.</h4>
        </div>
      </Row>
      <Row className="row-cols-md-2">
        <HomeRow
          image={fishImage}
          title="Fish"
          buttonLinkToPath="shop/fish"
          description="We offer a wide variety of ornamental fish suitable for your ponds and aquariums!"
        />
        <HomeRow
          image={aquariumImage}
          title="Aquariums"
          buttonLinkToPath="shop/aquariums"
          description="Premium housing for your beloved fishes!"
        />
      </Row>
    </Container>
  );
}

export default Home;

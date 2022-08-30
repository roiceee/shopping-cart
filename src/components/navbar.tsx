import * as React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import cartIcon from "../assets/images/shopping-cart.svg";
import fishIcon from "../assets/images/logo.png";

function NavigationBar() {
  return (
    <Navbar bg="first" variant="dark">
      <Container>
        <Navbar.Brand>
            <img src={fishIcon} className="mx-2"/>
            AquaShop</Navbar.Brand>
        <Navbar.Text>
          <Nav className="me-auto">
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>
              <div>
                <img id="cart-icon" src={cartIcon} />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

import * as React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import cartIcon from "../assets/images/shopping-cart.svg";
import fishIcon from "../assets/images/logo.png";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { Link } from "react-router-dom";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

function NavigationBar() {
  return (
    <Navbar bg="first" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light">
            <img src={fishIcon} className="mx-2" id="fish-icon" />
            AquaShop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Navbar.Text>
            <Nav className="me-auto gap-3">
              <NavDropdown title="Shop" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/Fish">
                  Fish
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aquariums">
                  Aquariums
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Text>
                <Link to="/about" className="text-decoration-none">
                  About
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/cart">
                  <img id="cart-icon" src={cartIcon} />
                </Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

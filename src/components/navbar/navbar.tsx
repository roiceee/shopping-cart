import * as React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import cartIcon from "../../assets/images/shopping-cart.svg";
import fishIcon from "../../assets/images/logo.png";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import "./navbar.scss";

function NavigationBar() {
  return (
    <Navbar bg="first" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light">
            <img src={fishIcon} className="mx-2" id="fish-icon" />
            AquaShop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          className="bg-black opacity-75 w-auto text-light"
        >
          <Offcanvas.Header closeButton className="bg-first">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              AquaShop
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Navbar.Text className="mx-5">
                <Nav className="me-auto">
                  <Navbar.Text className="mx-md-4">
                    <Link to="/" className="text-decoration-none">
                      Home
                    </Link>
                  </Navbar.Text>
                  <NavDropdown
                    title="Shop"
                    menuVariant="dark"
                    className="mx-md-4"
                  >
                    <NavDropdown.Item as={Link} to="/fish">
                      Fish
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/aquariums">
                      Aquariums
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Navbar.Text className="mx-md-4">
                    <Link to="/about" className="text-decoration-none">
                      About
                    </Link>
                  </Navbar.Text>
                  <Navbar.Text className="mx-md-4">
                    <Link to="/cart">
                      <img id="cart-icon" src={cartIcon} />
                    </Link>
                  </Navbar.Text>
                </Nav>
              </Navbar.Text>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

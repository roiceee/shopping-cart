import React, { useState } from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import cartIcon from "../../assets/images/shopping-cart.svg";
import fishIcon from "../../assets/images/logo.png";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Dropdown from "react-bootstrap/esm/Dropdown"
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import "./navbar.scss";

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <Navbar bg="first" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light">
            <img src={fishIcon} className="mx-2" id="fish-icon" />
            AquaShop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleShow} />
        <Navbar.Offcanvas
          show={show}
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          className="bg-first w-75 text-light"
          onHide={handleClose}
        >
          <Offcanvas.Header
            closeButton
            className="bg-first text-light"
          >
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              AquaShop
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Navbar.Text className="mx-5">
                <Nav className="me-auto">
                  <Navbar.Text className="mx-md-4" onClick={handleClose}>
                    <Link to="/" className="text-decoration-none">
                      Home
                    </Link>
                  </Navbar.Text>
                  <NavDropdown
                    title="Shop"
                    className="mx-md-4"
                  >
                    <Dropdown.Menu variant="dark" className="bg-first border-0 p-0">
                    <NavDropdown.Item
                      as={Link}
                      to="/shop/fish"
                      className="text-light"
                      onClick={handleClose}
                    >
                      Fish
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/shop/aquariums"
                      className="text-light"
                      onClick={handleClose}
                    >
                      Aquariums
                    </NavDropdown.Item>
                    </Dropdown.Menu>
                  </NavDropdown>
                  <Navbar.Text className="mx-md-4">
                    <Link
                      to="/about"
                      className="text-decoration-none"
                      onClick={handleClose}
                    >
                      About
                    </Link>
                  </Navbar.Text>
                  <Navbar.Text className="mx-md-4" onClick={handleClose}>
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

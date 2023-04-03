import React, { FC } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaWizardsOfTheCoast } from "react-icons/fa";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>

            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>

            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>

          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <FaShoppingCart className="cart-icon" />
            <div
              className="rounded-circle bg-danger d-flex-justify-content-center align-items-center"
              style={{
                color: "#fff",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(35%,17%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;

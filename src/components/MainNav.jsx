import React from "react";

import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

import { Link } from "react-router-dom";

import Popup from "./popup/Popup";
import LoggedOut from "./MainNav/LoggedOut";
import LoggedIn from "./MainNav/LoggedIn";
import Buttons from "./MainNav/Buttons";
import { useSelector } from "react-redux";

function MainNav() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            CIMS
          </Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className="ms-auto"
            ></Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className=" flex-grow-1 pe-3">
                {user.authenticated && <LoggedIn />}

                {!user.authenticated && <LoggedOut />}

                <Nav.Item>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </Nav.Item>

                {!user.authenticated && <Buttons />}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Popup />
    </>
  );
}

export default MainNav;

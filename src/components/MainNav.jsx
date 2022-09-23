import { NavDropdown, Navbar, Nav, Container, Button } from "react-bootstrap";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../styles/Nav.css";

const MainNav = () => {
  const { authenticated } = useSelector((state) => state.user);
  console.log(authenticated);
  return (
    <Navbar key="md" bg="light" expand="md" className="mb-3">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>CIMS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/about" className="me-2">
                About
              </Link>
              <Link to="/price-plane" className="me-2">
                Price Plan
              </Link>

              {!authenticated ? (
                <Link to="login">
                  <Button className="btn-sm">Sign In</Button>
                </Link>
              ) : (
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="basic-nav-dropdown"
                >
                  <Link to="/account" className="dropdown-item">
                    Account
                  </Link>

                  <NavDropdown.Divider />

                  <Link to="/settings" className="dropdown-item">
                    Settings
                  </Link>

                  <NavDropdown.Divider />

                  <Link to="stock" className="dropdown-item">
                    Stock
                  </Link>
                </NavDropdown>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainNav;

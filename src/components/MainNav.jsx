import {
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
} from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Popup from "../features/Popup/Popup";

import "../styles/Nav.css";

function MainNav() {
  const state = useSelector((state) => state);
  console.log(state);
  const { authenticated } = useSelector((state) => state.user);
  const { togglePopup } = useSelector((state) => state.popup);

  return (
    <>
      <Navbar key="md" bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">CIMS</Navbar.Brand>

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
                {authenticated && (
                  <NavDropdown
                    title={<FontAwesomeIcon icon={faUser} />}
                    id="offcanvasNavbarDropdown-expand-md"
                    className="order-md-3 "
                  >
                    //Make these account settings and shit
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                <Nav.Item>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </Nav.Item>

                {!authenticated && (
                  <Nav.Item className="ms-auto">
                    <Button
                      onClick={() => {
                        <Popup />;
                      }}
                    >
                      Register/Login
                    </Button>
                  </Nav.Item>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserAuthenticated } from "../../reducers/userSlice";

const LoggedIn = () => {
  const dispatch = useDispatch();

  //   const [show, setShow] = useState(false);
  //   const showDropDown = (e) => {
  //     setShow(!show);
  //   };
  //   const hideDropDown = (e) => {
  //     setShow(false);
  //   };
  return (
    <>
      <NavDropdown
        title="Stock"
        // show={show}
        // onMouseEnter={showDropDown}
        // onMouseLeave={hideDropDown}
        id="offcanvasNavbarDropdown-expand-md"
        className="order-md-3"
      >
        <Link to="account-settings" className="dropdown-item">
          Manage
        </Link>
        <NavDropdown.Divider />
        <Link to="account-profile" className="dropdown-item">
          View
        </Link>
      </NavDropdown>

      <NavDropdown
        title="Invoices"
        id="offcanvasNavbarDropdown-expand-md"
        className="order-md-3 "
      >
        <Link to="account-settings" className="dropdown-item">
          Generate
        </Link>
        <NavDropdown.Divider />
        <Link to="account-profile" className="dropdown-item">
          View
        </Link>
      </NavDropdown>

      <Nav.Item>
        <Link to="/price-plans" className="nav-link"></Link>
      </Nav.Item>

      <NavDropdown
        title={<FontAwesomeIcon icon={faUser} />}
        id="offcanvasNavbarDropdown-expand-md"
        className="order-md-3 "
      >
        <Link to="account-settings" className="dropdown-item">
          Settings
        </Link>
        <NavDropdown.Divider />
        <Link to="account-profile" className="dropdown-item">
          Profile
        </Link>
        <NavDropdown.Divider />
        <Link
          to="/"
          className="dropdown-item"
          onClick={() => dispatch(setUserAuthenticated())}
        >
          Log out
        </Link>
      </NavDropdown>
    </>
  );
};

export default LoggedIn;

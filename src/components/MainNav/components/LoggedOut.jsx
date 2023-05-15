import React from "react";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";

const LoggedOut = () => {
  return (
    <>
      <Nav.Item>
        <Link to="/price-plans" className="nav-link">
          Price Plans
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="#landing" className="nav-link">
          Request Demo
        </Link>
      </Nav.Item>
    </>
  );
};

export default LoggedOut;

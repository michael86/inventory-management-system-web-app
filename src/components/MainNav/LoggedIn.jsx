import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuthenticated, setUserToken } from "../../reducers/userSlice";
import { default as axios } from "../../utils/axiosInstance";
import { deleteStore } from "../../localStorage";

const LoggedIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onClick = async () => {
    const res = await axios.delete("/account/logout", {
      headers: { token: user.token },
      data: {
        email: user.email,
      },
    });

    //Something went wrong
    if (!res.status === 200) {
      console.log(res);
      return;
    }

    deleteStore("token");
    dispatch(setUserAuthenticated(false));
    dispatch(setUserToken(undefined));
  };

  return (
    <>
      <NavDropdown
        title="Stock"
        id="offcanvasNavbarDropdown-expand-md"
        className="order-md-3"
      >
        <Link to="manage-stock" className="dropdown-item">
          Manage
        </Link>
        <NavDropdown.Divider />
        <Link to="view-stock" className="dropdown-item">
          View
        </Link>
        <NavDropdown.Divider />
        <Link to="add-stock" className="dropdown-item">
          Add
        </Link>
      </NavDropdown>

      <NavDropdown
        title="Invoices"
        id="offcanvasNavbarDropdown-expand-md"
        className="order-md-3 "
      >
        <Link to="generate-invoice" className="dropdown-item">
          Generate
        </Link>
        <NavDropdown.Divider />
        <Link to="view-invoices" className="dropdown-item">
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
        <a role="button" href="#" className="dropdown-item " onClick={onClick}>
          Log out
        </a>
      </NavDropdown>
    </>
  );
};

export default LoggedIn;

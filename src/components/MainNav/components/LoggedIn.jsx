import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuthenticated, setUserToken } from "../../../reducers/userSlice";
import { default as axios } from "../../../utils/axios";
import { deleteStore } from "../../../localStorage";

const LoggedIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const company = useSelector((state) => state.company);

  const onClick = async () => {
    const res = await axios.delete("/account/logout", {
      data: {
        email: user.email,
      },
    });

    if (!res.status === 200) return;

    deleteStore("token");
    deleteStore("company");
    dispatch(setUserAuthenticated(false));
    dispatch(setUserToken(undefined));
  };

  return (
    <>
      {company.name && (
        <>
          <NavDropdown title="Stock" id="offcanvasNavbarDropdown-expand-md" className="order-md-3">
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
        </>
      )}

      {user.role === 3 && (
        <NavDropdown title="Users" id="offcanvasNavbarDropdown-expand-md" className="order-md-3">
          <Link to="manage-users" className="dropdown-item">
            Manage
          </Link>
          <NavDropdown.Divider />
          <Link to="add-user" className="dropdown-item">
            Add
          </Link>
        </NavDropdown>
      )}

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
        <NavDropdown.Item role="button" className="dropdown-item " onClick={onClick}>
          Log out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LoggedIn;

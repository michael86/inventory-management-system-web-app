import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { togglePopup, setPopupScreen } from "../../reducers/popupSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Nav.Item className="ms-auto">
        <Button
          onClick={() => {
            dispatch(setPopupScreen(0));
            dispatch(togglePopup());
          }}
        >
          Register/Login
        </Button>
      </Nav.Item>
    </>
  );
};

export default Buttons;

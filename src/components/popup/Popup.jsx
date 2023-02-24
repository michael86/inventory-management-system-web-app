import React from "react";

import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { togglePopup } from "../../reducers/popupSlice";

import Login from "./body/Login";
import Register from "./body/Register";
import Stock from "./body/Stock";

const Popup = () => {
  const dispatch = useDispatch();
  const { show, screen } = useSelector((state) => state.popup);

  return (
    <>
      <Modal
        show={show}
        className="max-vh-75 overflow-auto"
        centered
        onHide={() => dispatch(togglePopup())}
      >
        {screen === 0 && <Login />}
        {screen === 1 && <Register />}
        {screen === 2 && <Stock />}
      </Modal>
    </>
  );
};

export default Popup;

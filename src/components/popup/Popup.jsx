import React from "react";

import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { togglePopup } from "../../reducers/popupSlice";

import Login from "./body/Login";
import Register from "./body/Register";

const Popup = () => {
  const dispatch = useDispatch();
  const { show, screen } = useSelector((state) => state.popup);

  return (
    <>
      <Modal show={show} centered onHide={() => dispatch(togglePopup())}>
        {screen === 0 && <Login />}
        {screen === 1 && <Register />}
      </Modal>
    </>
  );
};

export default Popup;

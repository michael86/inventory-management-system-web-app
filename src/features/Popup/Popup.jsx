import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";

const Popup = (props) => {
  const popup = useSelector((state) => state.popup);
  console.log(popup);

  const dispatch = useDispatch();

  return (
    <>
      <Modal show={popup.show} onHide={dispatch(togglePopup())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={dispatch(togglePopup())}>
            Close
          </Button>
          <Button variant="primary" onClick={dispatch(togglePopup())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const TogglePopup = () => {
  const { togglePopup } = useSelector((state) => state.popup);
  togglePopup();
};

export default Popup;

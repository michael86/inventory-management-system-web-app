import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPopupScreen } from "../../reducers/popupSlice";

const Footer = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal.Footer>
      <Button variant="primary">Submit</Button>
      <Button
        variant="warning"
        onClick={() => dispatch(setPopupScreen(props.screen))}
      >
        {props.label}
      </Button>
    </Modal.Footer>
  );
};

export default Footer;

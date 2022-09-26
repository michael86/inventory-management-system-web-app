import React from "react";
import { Modal } from "react-bootstrap";

const Header = (props) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{props.label}</Modal.Title>
    </Modal.Header>
  );
};

export default Header;

import React from "react";
import { Button } from "react-bootstrap";

const InvoiceButton = ({ onClick, text }) => {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
};

export default InvoiceButton;

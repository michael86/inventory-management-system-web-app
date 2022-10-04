import React from "react";
import { Button } from "react-bootstrap";

const ViewInvoiceButton = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>View Invoice</Button>
    </>
  );
};

export default ViewInvoiceButton;

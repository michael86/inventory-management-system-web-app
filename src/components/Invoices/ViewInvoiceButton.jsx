import React from "react";
import { Button } from "react-bootstrap";

const ViewInvoiceButton = ({ id }) => {
  // const

  const showInvoice = (id) => {};

  return (
    <>
      <Button onClick={() => showInvoice(id)}>View Invoice</Button>
    </>
  );
};

export default ViewInvoiceButton;

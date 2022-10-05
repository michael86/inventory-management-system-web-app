import React from "react";
import { Card, Form } from "react-bootstrap";

const GenInvoiceCard = ({ headerText, inputs }) => {
  return (
    <Card className="company form-card col-12 col-lg-6 pe-0 ps-0 shadow">
      <Card.Header className="text-center bg-primary text-light fs-4 ">
        {headerText}
      </Card.Header>
      <Card.Body className="bg-light">
        <Form.Group
          controlId="company-name"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">Company Name:</Form.Label>
          <Form.Control type="text" placeholder="Company name" />
        </Form.Group>
        <Form.Group
          controlId="name"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">Contact Name:</Form.Label>
          <Form.Control type="text" placeholder="Contact name" />
        </Form.Group>
        <Form.Group
          controlId="address"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">Address:</Form.Label>
          <Form.Control type="text" placeholder="123 fake street" />
        </Form.Group>
        <Form.Group
          controlId="city"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">city:</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group
          controlId="state"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">state:</Form.Label>
          <Form.Control type="text" placeholder="State/County" />
        </Form.Group>
        <Form.Group
          controlId="country"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">Country:</Form.Label>
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
        <Form.Group
          controlId="postcode"
          className="d-flex flex-column flex-lg-row mb-2"
        >
          <Form.Label className="me-2 mb-0">Postcode:</Form.Label>
          <Form.Control type="text" placeholder="Postcode/Zip" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default GenInvoiceCard;

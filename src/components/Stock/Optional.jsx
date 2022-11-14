import React from "react";
import { Form } from "react-bootstrap";

const OptionalAddStock = ({ priceDisabled, setPriceDisabled }) => {
  return (
    <>
      <Form.Group className="mb-3 mt-3" controlId="stockImg">
        <Form.Control type="file" accept=".png,.jpg.webp" />
        <Form.Text>
          Upload image of item, valid file formats: PNG, JPG, WEBP
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="freeIssue">
        <Form.Check
          type="checkbox"
          id="freeIssue"
          label="Free Issue"
          onClick={() => setPriceDisabled(!priceDisabled)}
        />
        <Form.Text>
          Check this if the stock was free issue, will disable price requirement
        </Form.Text>
      </Form.Group>
    </>
  );
};

export default OptionalAddStock;
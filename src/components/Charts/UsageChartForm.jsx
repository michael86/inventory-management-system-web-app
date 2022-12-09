import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const UseageChartForm = () => {
  return (
    <Form className="d-flex">
      <Form.Select size="sm">
        <option value="1">Highest Count</option>
        <option value="2">Lowest Count</option>
      </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="Sku">Sku</InputGroup.Text>
        <Form.Control
          placeholder="Sku"
          aria-label="Sku"
          aria-describedby="Sku"
        />
      </InputGroup>
    </Form>
  );
};

export default UseageChartForm;

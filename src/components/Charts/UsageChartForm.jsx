import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const UseageChartForm = ({
  dateObject,
  minMaxValues,
  setMinMaxValues,
  searchFilter,
  setSearchFilter,
}) => {
  return (
    <Form className="d-flex">
      <Form.Select
        size="sm"
        onChange={(e) => setMinMaxValues(Number(e.target.value))}
        defaultValue={minMaxValues}
      >
        <option value="0">Highest Count</option>
        <option value="1">Lowest Count</option>
      </Form.Select>
      <InputGroup className="mb-3">
        <InputGroup.Text id="Sku">Sku</InputGroup.Text>
        <Form.Control
          placeholder="Sku"
          aria-label="Sku"
          aria-describedby="Sku"
          value={searchFilter}
          onInput={(e) => setSearchFilter(e.target.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default UseageChartForm;

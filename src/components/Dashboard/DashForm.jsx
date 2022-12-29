import React, { useState } from "react";
import { Badge, Button, Form, InputGroup } from "react-bootstrap";
import { getMonth, getYear, makeMonthReadable } from "../../utils";
import Timebuttons from "./TimeButtons";

const DashForm = ({
  dateObject,
  minMaxValues,
  setMinMaxValues,
  searchFilter,
  setSearchFilter,
}) => {
  const [year, setYear] = useState(getYear());
  const [month, setMonth] = useState(getMonth());

  return (
    <Form>
      <Timebuttons
        dateObject={dateObject}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />
      <div className="d-flex mt-2">
        <Form.Select
          size="sm"
          onChange={(e) => setMinMaxValues(Number(e.target.value))}
          defaultValue={minMaxValues}
          className="me-2"
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
      </div>
    </Form>
  );
};

export default DashForm;

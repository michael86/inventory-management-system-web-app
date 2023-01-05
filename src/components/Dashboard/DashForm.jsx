import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { getMonth, getYear } from "../../utils";
import Timebuttons from "./TimeButtons";

const DashForm = ({
  dateObject,
  minMaxValues,
  setMinMaxValues,
  onSearchfilter,
  onYearChange,
  onMonthChange,
  year,
  setYear,
  month,
  setMonth,
}) => {
  return (
    <Form>
      <Timebuttons
        dateObject={dateObject}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        onYearChange={onYearChange}
        onMonthChange={onMonthChange}
      />

      <div className="d-flex mt-2">
        <Form.Select
          size="sm"
          onChange={(e) => setMinMaxValues(+e.target.value)}
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
            onInput={onSearchfilter}
          />
        </InputGroup>
      </div>
    </Form>
  );
};

export default DashForm;

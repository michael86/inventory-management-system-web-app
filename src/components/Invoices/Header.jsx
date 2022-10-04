import React from "react";

import { Form } from "react-bootstrap";

const Header = ({ filterDate, onInput }) => {
  return (
    <>
      <div className="d-flex justify-content-between flex-column flex-lg-row ">
        <Form.Group className="mb-3 w-lg-50 " controlId="filter-date">
          <Form.Label>Filter by Date</Form.Label>
          <Form.Select size="sm" name="filter-date" onChange={filterDate}>
            <option value="0">Date: Ascending</option>
            <option value="1">Date: Descending</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="search=invoices">
          <Form.Label>Search</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onInput={onInput}
            />
          </div>
        </Form.Group>
      </div>
    </>
  );
};

export default Header;

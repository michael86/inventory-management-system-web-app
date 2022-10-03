import React, { useState } from "react";
import { Container, FormLabel, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Form, Button } from "react-bootstrap";

import {
  filterInvoices,
  sortAscending,
  sortDescending,
} from "./Invoices/Utils/Index";

import ViewInvoiceButton from "./Invoices/ViewInvoiceButton";

import "../styles/InvoiceTable.css";

const ViewInvoices = () => {
  const { invoices } = useSelector((state) => state.invoices);
  const [filteredInvoices, setFilteredInvoices] = useState();

  const formatDate = (unix) => {
    let date = new Date(unix);
    date = date.toLocaleDateString();
    return date;
  };

  const filterDate = (e) =>
    setFilteredInvoices(
      e.target.value === "0"
        ? sortAscending(filteredInvoices || invoices)
        : sortDescending(filteredInvoices || invoices)
    );

  const onInput = (e) =>
    setFilteredInvoices(filterInvoices({ invoices, filter: e.target.value }));

  let counter;
  const genRow = () => {};

  const data = filteredInvoices ? filteredInvoices : invoices;

  return (
    <>
      <h1 className="text-center">Invoices</h1>
      <Container>
        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 w-50 " controlId="filter-date">
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
              <Button variant="outline-success">Search</Button>
            </div>
          </Form.Group>
        </div>

        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((invoice, index) => {
              return (
                <tr key={index}>
                  {/*Gen a unique key at some point*/}

                  <td>{formatDate(invoice.date_generated)}</td>
                  <td>{invoice.from}</td>
                  <td>{invoice.to}</td>
                  <td>{<ViewInvoiceButton id={index} />}</td>
                </tr>
              );
            })}

            {/* <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ViewInvoices;

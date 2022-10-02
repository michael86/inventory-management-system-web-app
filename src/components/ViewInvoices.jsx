import React from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Form, Button } from "react-bootstrap";

import { sortAscending } from "./Invoices/Utils/Index";

import ViewInvoiceButton from "./Invoices/ViewInvoiceButton";

import "../styles/InvoiceTable.css";

const ViewInvoices = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const formatDate = (unix) => {
    let date = new Date(unix);
    date = date.toLocaleDateString();
    return date;
  };

  let counter;
  const genRow = () => {};

  return (
    <>
      <h1 className="text-center">Invoices</h1>
      <Container>
        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 w-50 ">
            <Form.Select size="sm" p>
              <option value="">Sort By</option>
              <option value="">Date: Ascending</option>
              <option value="">Date: Descending</option>
              <option value="">Sort By</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="outline-success">Search</Button>
            </Form>
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
            {sortAscending(invoices).map((invoice, index) => {
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

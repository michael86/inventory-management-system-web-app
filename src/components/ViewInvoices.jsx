import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Form, Button } from "react-bootstrap";
import TablePagination from "./Invoices/TablePagination";

import {
  filterInvoices,
  genPages,
  sortAscending,
  sortDescending,
} from "./Invoices/Utils/Index";

import ViewInvoiceButton from "./Invoices/ViewInvoiceButton";

import "../styles/InvoiceTable.css";

const ViewInvoices = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const [pages, setPages] = useState(genPages(invoices)); // 2d array, each child will be a sepearate table page
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const formatDate = (unix) => {
    let date = new Date(unix);
    date = date.toLocaleDateString();
    return date;
  };

  const filterDate = (e) =>
    setPages(
      e.target.value === "0"
        ? genPages(
            sortAscending(
              filteredInvoices.length > 0 ? filteredInvoices : invoices
            )
          )
        : genPages(
            sortDescending(
              filteredInvoices.length > 0 ? filteredInvoices : invoices
            )
          )
    );

  useEffect(() => {
    const newPages = genPages(
      filteredInvoices.length > 0 ? filteredInvoices : invoices
    );

    setPages(newPages);

    // !pages[pageIndex] && setPageIndex(0); //This isn't working
    setPageIndex(0);
  }, [filteredInvoices]);

  const onInput = (e) =>
    setFilteredInvoices(filterInvoices({ invoices, filter: e.target.value }));

  const setRowCount = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1 className="text-center">Invoices</h1>

      <Container className="position-relative">
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
            {pages[pageIndex].map((invoice, index) => {
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
          </tbody>
        </Table>

        <Container className="d-flex flex-column flex-lg-row row">
          <div className="mx-auto position-lg-absolute bottom-0 start-0 end-0 col-12">
            <TablePagination
              count={pages.length}
              active={pageIndex + 1}
              setPageIndex={setPageIndex}
            />
          </div>

          <Form.Group
            className="text-center col-12 col-lg-3 d-lg-flex row-count-container"
            controlId="table-row-count"
          >
            <Form.Label>Rows per page:</Form.Label>
            <Form.Select
              aria-label="table-row-count row-count-select"
              onChange={setRowCount}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </Form.Select>
          </Form.Group>
        </Container>
      </Container>
    </>
  );
};

export default ViewInvoices;

import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  filterInvoices,
  genPages,
  sortAscending,
  sortDescending,
  findInvoiceById,
} from "./Invoices/Utils/Index";

import {
  togglePopup,
  setPopupScreen,
  setPopupInvoice,
} from "../reducers/popupSlice";

import Footer from "./Invoices/Footer";

import ViewInvoiceButton from "./Invoices/ViewInvoiceButton";

import "../styles/Invoice.css";
import Header from "./Invoices/Header";

const ViewInvoices = () => {
  const { invoices } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();

  const [pages, setPages] = useState(genPages(invoices)); // 2d array, each child will be a sepearate table page
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowCount, setRowCount] = useState(5);

  const formatDate = (unix) => {
    let date = new Date(unix);
    date = date.toLocaleDateString();
    return date;
  };

  const filterDate = (e) =>
    setPages(
      genPages(
        e.target.value === "0"
          ? sortAscending(
              filteredInvoices.length > 0 ? filteredInvoices : invoices
            )
          : sortDescending(
              filteredInvoices.length > 0 ? filteredInvoices : invoices
            ),
        rowCount
      )
    );

  const onInput = (e) => {
    const copy = filterInvoices({ invoices, filter: e.target.value });
    setFilteredInvoices(copy);

    const newPages = genPages(copy.length > 0 ? copy : invoices, rowCount);

    setPages(newPages);

    setPageIndex(0);
  };

  const setPageCount = (e) => {
    setPageIndex(0);
    const count = Number(e.target.value);
    setPages(
      genPages(filteredInvoices.length > 0 ? filteredInvoices : invoices, count)
    );

    setRowCount(count);
  };

  const onClick = (id) => {
    dispatch(setPopupScreen(2));
    dispatch(setPopupInvoice(findInvoiceById(id, invoices)));
    dispatch(togglePopup());
  };

  return (
    <>
      <h1 className="text-center">Invoices</h1>

      <Container className="position-relative">
        <Header filterDate={filterDate} onInput={onInput} />

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
                  <td>
                    {<ViewInvoiceButton onClick={() => onClick(invoice.id)} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Footer
          pages={pages}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          setPageCount={setPageCount}
        />
      </Container>
    </>
  );
};

export default ViewInvoices;

import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import {
  filterInvoices,
  genPages,
  sortAscending,
  sortDescending,
} from "./Invoices/Utils/Index";

import Footer from "./Invoices/Footer";

import "../styles/Invoice.css";
import Header from "./Invoices/Header";
import GenInvoiceTable from "./Invoices/GenInvoiceTable";

const ViewInvoices = () => {
  const { invoices } = useSelector((state) => state.invoices);

  const [pages, setPages] = useState(genPages(invoices)); // 2d array, each child will be a sepearate table page
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowCount, setRowCount] = useState(5);

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

  return (
    <>
      <h1 className="text-center">Invoices</h1>

      {!pages[pageIndex] && (
        <h2 className="text-warning text-center">No Invoices Found</h2>
      )}

      {pages[pageIndex] && (
        <Container className="position-relative">
          <Header filterDate={filterDate} onInput={onInput} />

          <GenInvoiceTable
            pages={pages}
            pageIndex={pageIndex}
            invoices={invoices}
          />

          <Footer
            pages={pages}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            setPageCount={setPageCount}
          />
        </Container>
      )}
    </>
  );
};

export default ViewInvoices;

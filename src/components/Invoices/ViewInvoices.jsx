import React, { useState } from "react";
import { useEffect } from "react";

import { Container } from "react-bootstrap";

import {
  filterInvoices,
  genPages,
  sortAscending,
  sortDescending,
} from "./Utils/Index";
import axios from "../../utils/axiosInstance";

import Header from "./Header";
import Footer from "./Footer";
import GenInvoiceTable from "./GenInvoiceTable";

import "../../styles/Invoice.css";

const ViewInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  const [pages, setPages] = useState([]); // 2d array, each child will be a sepearate table page
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowCount, setRowCount] = useState(5);

  const filterDate = (e) => {
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
  };

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

  useEffect(() => {
    const getInvoices = async () => {
      const res = await axios.get("invoice/get");

      setInvoices(res.data?.data || []);
      setPages(genPages(sortAscending(res.data?.data || [])));
    };

    getInvoices();
  }, []);

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

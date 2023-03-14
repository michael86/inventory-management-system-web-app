import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import utils from "../../utils/invoices";
import axios from "../../utils/axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GenInvoiceTable from "./components/GenInvoiceTable";

import "../../styles/Invoice.css";

const ViewInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  const [pages, setPages] = useState([]); // 2d array, each child will be a sepearate table page
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [rowCount, setRowCount] = useState(5);

  const setNewPages = (copy) => {
    const newInvoices = copy.length > 0 ? copy : invoices;
    const newPages = utils.genPages(newInvoices, rowCount);
    setPages(newPages);
  };

  const filterDate = (e) => {
    const payload = filteredInvoices.length > 0 ? filteredInvoices : [...invoices];

    const newInvoices = utils.sortAscending(payload, e.target.value === "0");
    setNewPages(newInvoices);
  };

  const onInput = ({ target }) => {
    const filter = target.value;
    const copy = utils.filterInvoices(invoices, filter);
    setFilteredInvoices(copy);

    setNewPages(copy);
    setPageIndex(0);
  };

  const setPageCount = ({ target }) => {
    setPageIndex(0);
    const newCount = +target.value;

    const newInvoices = filteredInvoices.length > 0 ? filteredInvoices : invoices;

    //Can't call setNewPages here due to racing issues
    const newPages = utils.genPages(newInvoices, newCount);
    setPages(newPages);

    setRowCount(newCount);
  };

  useEffect(() => {
    const getInvoices = async () => {
      const res = await axios.get("invoice/get");
      // const res = await axios.get("invoice/get?id=12");

      setInvoices(res.data?.data || []);
      setPages(utils.genPages(utils.sortAscending(res.data?.data || [])));
    };

    getInvoices();
  }, []);

  return (
    <>
      <h1 className="text-center">Invoices</h1>

      {!pages[pageIndex] && <h2 className="text-warning text-center">No Invoices Found</h2>}

      {pages[pageIndex] && (
        <Container className="position-relative">
          <Header filterDate={filterDate} onInput={onInput} />

          <GenInvoiceTable pages={pages} pageIndex={pageIndex} invoices={invoices} />

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

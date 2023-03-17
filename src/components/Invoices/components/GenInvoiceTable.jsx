import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

import { toast, ToastContainer } from "react-toastify";
import InvoiceButton from "./InvoiceButton";

const GenInvoiceTable = ({ pages, pageIndex }) => {
  const formatDate = (unix) => {
    console.log(unix);
    let date = new Date(unix * 1000);

    date = date.toLocaleDateString();

    return date;
  };

  return (
    <>
      <ToastContainer />
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>To</th>
            <th className="text-center">Download</th>
          </tr>
        </thead>
        <tbody>
          {pages[pageIndex].map((invoice, index) => {
            console.log(invoice);
            return (
              <tr key={index}>
                <td>{formatDate(invoice.billingDate)}</td>

                <td>
                  {invoice.contact} - {invoice.name}
                </td>

                <td className="text-center">{<InvoiceButton id={invoice.id} />}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GenInvoiceTable;

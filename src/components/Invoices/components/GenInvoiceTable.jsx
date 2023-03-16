import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../../../utils/axios";

import { toast, ToastContainer } from "react-toastify";
import InvoiceButton from "./InvoiceButton";

const GenInvoiceTable = ({ pages, pageIndex }) => {
  const userCompany = useSelector((state) => state.company);
  const { token } = useSelector((state) => state.user);

  const formatDate = (unix) => {
    console.log(unix);
    let date = new Date(unix * 1000);

    date = date.toLocaleDateString();

    return date;
  };

  const onClick = async (id) => {
    try {
      const res = await axios.get(`invoice/get?id=${id}&download=true`);
      const { filename } = res.data;
      if (!filename) throw new Error("Error getting filename for invoice");

      const blob = await axios(`download/pdf/${filename}?token=${token}`, {
        method: "GET",
        responseType: "blob", // important
      });

      const url = window.URL.createObjectURL(new Blob([blob.data]));
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.log(err);
      err.response?.status === 500 &&
        toast.error(
          "We're sorry, something went wrong there, please try again. \nIf the problem persists, please contact support"
        );
    }
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

                <td className="text-center">
                  {<InvoiceButton onClick={() => onClick(invoice.id)} text="Download Invoice" />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GenInvoiceTable;

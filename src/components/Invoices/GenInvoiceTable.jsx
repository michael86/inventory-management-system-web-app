import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../../utils/axiosInstance";

import InvoiceButton from "../Invoices/InvoiceButton";

const GenInvoiceTable = ({ pages, pageIndex }) => {
  const userCompany = useSelector((state) => state.company);

  const formatDate = (unix) => {
    let date = new Date(unix * 1000);
    date = date.toLocaleDateString();
    return date;
  };

  const onClick = async (id) => {
    const res = await axios.post(`invoice/gen-pdf`, {
      id: Number(id),
      company: userCompany,
    });

    const { fileName } = res.data;

    if (!fileName) console.log("handle file failing");
    const blob = await axios({
      url: `http://localhost:6005/download/pdf/${fileName}`,
      method: "GET",
      responseType: "blob", // important
    });

    const url = window.URL.createObjectURL(new Blob([blob.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th className="text-center">View</th>
          <th className="text-center">Download</th>
        </tr>
      </thead>
      <tbody>
        {pages[pageIndex].map((invoice, index) => {
          return (
            <tr key={index}>
              {/*Gen a unique key at some point*/}

              <td>{formatDate(invoice.billingDate)}</td>
              <td>
                {/* This will be from redux state.company */}
                {invoice.contact} - {invoice.name}
              </td>

              <td>
                {invoice.contact} - {invoice.name}
              </td>
              <td className="text-center">
                {
                  <InvoiceButton
                    onClick={() => onClick(invoice.id)}
                    text="View Invoice"
                  />
                }
              </td>
              <td className="text-center">
                {
                  <InvoiceButton
                    onClick={() => onClick(invoice.id)}
                    text="Download Invoice"
                  />
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default GenInvoiceTable;

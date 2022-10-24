import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  togglePopup,
  setPopupScreen,
  setPopupInvoice,
} from "../../reducers/popupSlice";
import ViewInvoiceButton from "../Invoices/ViewInvoiceButton";
import { findInvoiceById } from "./Utils/Index";

const GenInvoiceTable = ({ pages, pageIndex, invoices }) => {
  const dispatch = useDispatch();

  const formatDate = (unix) => {
    let date = new Date(unix);
    date = date.toLocaleDateString();
    return date;
  };

  const onClick = (id) => {
    dispatch(setPopupScreen(2));
    dispatch(setPopupInvoice(findInvoiceById(id, invoices)));
    dispatch(togglePopup());
  };

  return (
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
  );
};

export default GenInvoiceTable;

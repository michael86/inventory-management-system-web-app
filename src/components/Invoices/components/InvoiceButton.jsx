import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";

import axios from "../../../utils/axios";
import { toast } from "react-toastify";

const InvoiceButton = ({ id }) => {
  const { token } = useSelector((state) => state.user);
  const [generating, setGenerating] = useState(false);

  const onClick = async (id) => {
    try {
      setGenerating(true);
      const res = await axios.get(`invoice/get?id=${id}&download=true`);
      const { filename } = res.data;
      if (!filename) throw new Error("Error getting filename for invoice");

      const blob = await axios.get(`download/pdf/${filename}?token=${token}`, {
        responseType: "blob",
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
    } finally {
      setGenerating(false);
    }
  };

  return (
    <>
      <Button onClick={() => onClick(id)}>
        {generating ? <Spinner animation="border" variant="warning" /> : "Download"}
      </Button>
    </>
  );
};

export default InvoiceButton;

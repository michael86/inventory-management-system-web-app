import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import uniqid from "uniqid";

import axios from "../../utils/axios";

import TallyCard from "./components/TallyCard";
import GenInvoiceCard from "./components/GenInvoiceCard";

import { toCompany, item, specifics } from "./schema/genInvoiceInputs";

import "../../styles/Forms.css";
import "react-toastify/dist/ReactToastify.css";
import utils from "../../utils/invoices";

const GenerateInvoice = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState();

  //This is passed down to the items card, and used to catch when items are added. As items state needs to be in this component, not ideal, but... meh....
  const onAddItem = (e) => {
    const targetType = e.target.type;

    if (targetType !== "button") return;
    const { children } = e.currentTarget.children[1];

    let inputFields = utils.extractItemInput([...children]);

    //An error should be shown by joi, so just return if this fails.
    if (!utils.validateItemData(inputFields)) return;

    const itemData = utils.generateItemObject(inputFields);
    const copy = JSON.parse(JSON.stringify(items));

    const stockIndex = copy.findIndex((item) => item.item === itemData.item);

    if (stockIndex > -1) {
      setItems(utils.updateStockByIndex(copy, stockIndex, itemData));
      return;
    }
    copy.push(itemData);
    setItems(copy);
  };

  const onDelete = (id) => {
    const copy = [...items];
    const index = copy.findIndex((item) => item.id === id);
    copy.splice(index, 1);
    setItems(copy);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) return;

    const invoice = Object.fromEntries(new FormData(e.target));

    const company = {
      contact: invoice.invoiceContactName,
      name: invoice.invoiceCompanyName,
      address: invoice.invoiceCompanyAddress,
      city: invoice.invoiceCompanyCity,
      state: invoice.invoiceCompanyState,
      postcode: invoice.invoiceCompanyPostcode,
      country: invoice.invoiceCompanyCountry,
    };

    const specifics = {
      dueDate: invoice.dueDate,
      billingDate: invoice.billingDate,
      footer: invoice.footer,
      orderNumber: invoice.orderNumber,
    };

    const itemCopy = JSON.parse(JSON.stringify(items));

    for (const item in itemCopy) {
      delete itemCopy[item].id;
    }

    const data = { items: itemCopy, company, specifics };

    const res = await axios.put("invoice/add", data);

    if (!res.data?.status) {
      console.log("somethign went wrong adding invoice");
      return;
    }

    toast.success("Invoice added");
    e.target.reset();
    setItems([]);
  };

  return (
    <>
      <h1 className="text-center">Generate new invoice</h1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        type="success"
      />
      <Container fluid className="pe-5 ps-5">
        <Form name="shipToForm" onSubmit={onSubmit}>
          <Row>
            {/*To Company*/}
            <Col xs={12} lg={4} className="mb-4 ">
              <GenInvoiceCard
                headerText="To"
                inputs={toCompany}
                className="w-100"
                errors={errors}
                setErrors={setErrors}
              />
            </Col>

            {/*Invoice specifics*/}
            <Col xs={12} lg={4} className="mb-4 ">
              <GenInvoiceCard
                className="w-100"
                headerText="Specifics"
                inputs={specifics}
                errors={errors}
                setErrors={setErrors}
              />
            </Col>

            {/*Item card*/}
            <Col xs={12} lg={4} className="mb-4 ">
              <GenInvoiceCard
                className="w-100"
                headerText="items"
                inputs={item}
                onClick={onAddItem}
                onDelete={onDelete}
                footer={{
                  text: "Add",
                  items,
                }}
                errors={errors}
                setErrors={setErrors}
              />
            </Col>

            {/*Tally table card*/}
            <Col xs={12} className="mb-4 mb-lg-0">
              <TallyCard items={items} currency />
            </Col>
          </Row>

          <div className="mt-2">
            <Button type="submit" className="me-2">
              Submit
            </Button>
            <Button type="reset" onClick={() => setItems([])}>
              Reset
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default GenerateInvoice;

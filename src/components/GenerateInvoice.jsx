import React, { useState } from "react";
import "./../styles/Forms.css";

import uniqid from "uniqid";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import GenInvoiceCard from "./Invoices/GenInvoiceCard";
import TallyCard from "./Invoices/TallyCard";
import { toCompany, item, specifics } from "./Invoices/schema/genInvoiceInputs";
import { addInvoice } from "../reducers/invoicesSlice";
import { useDispatch, useSelector } from "react-redux";
import { genInvoice } from "./Invoices/Utils/Index";
import axios from "../utils/axiosInstance";
import { setUserToken } from "../reducers/userSlice";
import { setStore } from "../localStorage";

const GenerateInvoice = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState();
  const { company } = useSelector((state) => state.user); //Used to add 'from' parameter in the invoice
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onBubble = (e) => {
    //This is passed down to the items card, and used to catch when items are added. As items state needs to be in this component, not ideal, but... meh....
    const targetType = e.target.type;

    if (targetType !== "button") return;
    const { children } = e.currentTarget.children[1]; //Get card body children

    //Get inputs from children
    let inputs = [...children]
      .map((child) =>
        [...child.children].filter((child) => child.tagName === "INPUT")
      )
      .flat();

    const inputObject = {};
    let valid = inputs.every((input) => {
      if (input.value === "") return false;
      inputObject[input.name] = input.value;
      inputObject.id = uniqid();
      return true;
    });
    inputObject.quantity = Number(inputObject.quantity);
    inputObject.price = Number(inputObject.price);

    if (!valid) return;

    const copy = [...items];
    copy.push(inputObject);
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

    console.log("invoicer", invoice);

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

    const data = { items, company, specifics };

    const res = await axios.put("invoice/add", data, {
      headers: { token: user.token },
    });

    dispatch(setUserToken(res.data.token));
    setStore({ key: "token", data: res.data.token });
    // dispatch(addInvoice(genInvoice(invoice)));
  };

  return (
    <>
      <h1 className="text-center">Generate new invoice</h1>

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
                onClick={onBubble}
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

// id: "fkldasfk24324jdhkj",

//     date_generated: 1633902855 * 1000,
//     subtotal: 156,
//     total: 156,
//     order_number: 1234222,
//     header: {
//       company_name: "Nice Invoice",
//       company_logo: "logo.png",
//       company_address:
//         "Nice Invoice. 123 William Street 1th Floor New York, NY 123456",
//     },
//     footer: {
//       text: "This is footer - you can add any text here",
//     },
//     currency_symbol: "£",
//     date: {
//       billing_date: "08 August 2020",
//       due_date: "10 September 2020",
//     },

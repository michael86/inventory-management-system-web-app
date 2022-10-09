import React, { useState } from "react";
import "./../styles/Forms.css";

import uniqid from "uniqid";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import GenInvoiceCard from "./Invoices/GenInvoiceCard";
import TallyCard from "./Invoices/TallyCard";
import { toCompany, item, specifics } from "./Invoices/schema/genInvoiceInputs";

const GenerateInvoice = () => {
  const [items, setItems] = useState([]);
  const [currency, setCurrency] = useState("£");
  const [errors, setErrors] = useState();

  const onBubble = (e) => {
    //We have to bubble up to allow us to get the item entries and add to state
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
    inputs.forEach((input) => {
      inputObject[input.name] = input.value;
      inputObject.id = uniqid();
    });

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

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Object.keys(errors).length);
    console.log(errors);

    if (Object.keys(errors).length > 0) return;
    const formData = Object.fromEntries(new FormData(e.target));
    formData.items = items;
    console.log(formData);
    // const invoice = genInvoice()
  };

  console.log("render");

  const now = new Date();
  let day = ("0" + now.getDate()).slice(-2);
  let month = ("0" + (now.getMonth() + 1)).slice(-2);
  let today = now.getFullYear() + "-" + month + "-" + day;

  specifics.forEach((item) => {
    if (item.type === "date") item.value = today;
  });

  return (
    <>
      <h1 className="text-center">Generate new invoice</h1>

      <Container fluid className="pe-5 ps-5">
        <Form name="shipToForm" onSubmit={onSubmit}>
          <Row>
            {/*To Company*/}
            <Col xs={12} lg={6} xxl={4} className="mb-4 ">
              <GenInvoiceCard
                headerText="To"
                inputs={toCompany}
                className="w-100"
                errors={errors}
                setErrors={setErrors}
              />
            </Col>

            {/*Invoice specifics*/}
            <Col xs={12} lg={6} xxl={4} className="mb-4 ">
              <GenInvoiceCard
                className="w-100"
                headerText="Specifics"
                inputs={specifics}
                onDelete={onDelete}
                errors={errors}
                setErrors={setErrors}
              />
            </Col>

            {/*Item card*/}
            <Col xs={12} lg={6} xxl={4} className="mb-4 ">
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
            <Col xs={12} lg={6} xxl={12} className="mb-4 mb-lg-0">
              <TallyCard items={items} currency />
            </Col>
          </Row>

          <Button type="submit">Submit</Button>
          <Button type="reset" onClick={() => setItems([])}>
            Reset
          </Button>
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

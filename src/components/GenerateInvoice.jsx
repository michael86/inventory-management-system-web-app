import React, { useState } from "react";
import "./../styles/Forms.css";

import { Container, Form, Row, Col } from "react-bootstrap";
import GenInvoiceCard from "./Invoices/GenInvoiceCard";
import { toCompany, item } from "./Invoices/schema/genInvoiceInputs";

const GenerateInvoice = () => {
  const [items, setItems] = useState([]);

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

    const inputObect = {};
    inputs.forEach((input) => (inputObect[input.name] = input.value));
    const copy = [...items];
    copy.push(inputObect);
    setItems(copy);
  };

  return (
    <>
      <h1 className="text-center">Generate new invoice</h1>

      <Container className="pe-5 ps-5 pe-lg-0 ps-lg-0">
        <Form name="shipToForm">
          <Row>
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <GenInvoiceCard
                headerText="To"
                inputs={toCompany}
                className="w-100"
              />
            </Col>

            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <GenInvoiceCard
                className="w-100"
                headerText="items"
                inputs={item}
                onClick={onBubble}
                footer={{
                  text: "Add",
                  items,
                }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default GenerateInvoice;

// id: "fkldasfk24324jdhkj",

//     date_generated: 1633902855 * 1000,
//
//     items: [
//     {
//         item: "Water Glass Set",
//         description: "Water glass set for office",
//         quantity: 1,
//         price: 35.0,
//         tax: "",
//       },
//     ],
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

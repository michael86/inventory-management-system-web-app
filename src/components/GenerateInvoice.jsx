import React, { useState } from "react";
import "./../styles/Forms.css";

import uniqid from "uniqid";
import { Container, Form, Row, Col, Table } from "react-bootstrap";
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
                onDelete={onDelete}
                footer={{
                  text: "Add",
                  items,
                }}
              />
            </Col>
          </Row>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
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

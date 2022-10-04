import React from "react";
import "./../styles/Forms.css";

import { Container, Form, Button, Fieldset, Row, Card } from "react-bootstrap";

const GenerateInvoice = () => {
  return (
    <>
      <h1 className="text-center">Generate new invoice</h1>

      <Container>
        <Form>
          <Row>
            <Card className="company form-card col-12 col-lg-6 pe-0 ps-0">
              <Card.Header className="text-center"> To </Card.Header>
              <Card.Body>
                <Form.Group
                  controlId="company-name"
                  className="d-flex flex-row justify-content-center "
                >
                  <Form.Label className="me-2">Company Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="name"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">Contact Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="address"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">Address:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="city"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">city:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="state"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">state:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="country"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">Country:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
                <Form.Group
                  controlId="postcode"
                  className="d-flex flex-row justify-content-center"
                >
                  <Form.Label className="me-2">Postcode:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Contact name"
                    className="w-50"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default GenerateInvoice;

// id: "fkldasfk24324jdhkj",

//     date_generated: 1633902855 * 1000,
//     from: "photomechanical",
//     to: "you",
//     shipping: {
//       name: "Micheal",
//       address: "1234 Main Street",
//       city: "Dubai",
//       state: "Dubai",
//       country: "UAE",
//       postal_code: 94111,
//     },
//     items: [
//       {
//         item: "Chair",
//         description: "Wooden chair",
//         quantity: 1,
//         price: 50.0,
//         tax: "10%",
//       },
//       {
//         item: "Watch",
//         description: "Wall watch for office",
//         quantity: 2,
//         price: 30.0,
//         tax: "10%",
//       },
//       {
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

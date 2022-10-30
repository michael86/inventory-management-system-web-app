import React from "react";

import { Form, Row, Col } from "react-bootstrap";

const AccountSettings = () => {
  return (
    <Form>
      <Row>
        <Col xs={12} md={6} lg={4} className="d-flex flex-column mt-4 mt-lg-0">
          <Form.Label className="m-auto" htmlFor="styleMode">
            Dark Mode
          </Form.Label>
          <Form.Check
            type="switch"
            id="styleMode"
            label="Enable dark mode"
            className="m-auto"
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex flex-column mt-4 mt-lg-0">
          <Form.Label htmlFor="currencySelect" className="m-auto">
            Currency
          </Form.Label>
          <Form.Select
            type="switch"
            aria-label="Currency Select"
            id="currencySelect"
            className="m-auto w-75"
          >
            <option value="£">&#163; pound </option>
            <option value="$">&#36; dollar </option>
            <option value="¢">&#162; cent </option>
            <option value="¥">&#165; yen </option>
            <option value="₣">&#8355; franc </option>
            <option value="₤">&#8356; lira </option>
            <option value="₧">&#8359; peseta </option>
            <option value="€">&#128; euro </option>
            <option value="₹">&#x20B9; rupee </option>
            <option value="₩">&#8361; won </option>
            <option value="₴">&#8372; hryvnia </option>
            <option value="₯">&#8367; drachma </option>
            <option value="₮">&#8366; tugrik </option>
            <option value="₰">&#8368; german penny </option>
            <option value="₲">&#8370; guarani </option>
            <option value="₱">&#8369; peso </option>
            <option value="₳">&#8371; austral </option>
            <option value="₵">&#8373; cedi </option>
            <option value="₭">&#8365; kip </option>
            <option value="₪"> &#8362; new sheqel </option>
            <option value="₫">&#8363; dong </option>
          </Form.Select>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex flex-column mt-4 mt-lg-0">
          <Form.Label htmlFor="styleMode" className="m-auto">
            Dark Mode
          </Form.Label>
          <Form.Check
            type="switch"
            id="styleMode"
            label="Enable dark mode"
            className="m-auto"
          />
        </Col>
      </Row>
    </Form>
  );
};

export default AccountSettings;

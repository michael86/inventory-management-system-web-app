import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Modal, Form } from "react-bootstrap";

import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Input from "../components/Input";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header label={"Register"} />
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            controlId="email"
            label="Email Address"
            classNames={{ group: ["mb-3"], formText: ["text-muted"] }}
            placeholder="Enter Email"
            formText="We'll never share your email with anyone else."
          />

          <Input
            type="password"
            controlId="password"
            label="Password"
            classNames={{ group: ["mb-3"] }}
            placeholder="Password"
            custError="Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and be between 8 - 25 chars"
            required
          />

          <Input
            type="text"
            controlId="company"
            label="Company Name"
            classNames={{ group: ["mb-3"] }}
            placeholder="company name"
            required
          />

          <Form.Group className="mb-3">
            <Form.Label htmlFor="price-plan">Price Plan</Form.Label>
            <Form.Select id="price-plan" name="price-plan">
              <option>Free</option>
              <option>Basic</option>
              <option>Advanced</option>
              <option>Pro</option>
            </Form.Select>

            <Link
              to="/price-plan"
              className="text-muted"
              onClick={() => dispatch(togglePopup())}
            >
              View Price Plans
            </Link>
          </Form.Group>

          <Buttons
            variant="primary"
            type="submit"
            label="Submit"
            secondaryVariant="warning"
            secondaryOnClick={() => dispatch(setPopupScreen(0))}
            secondaryLabel="Login"
          />
        </Form>
      </Modal.Body>
    </>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Modal, Form } from "react-bootstrap";

import Footer from "../Footer";
import Header from "../Header";

import { togglePopup } from "../../../reducers/popupSlice";
import { validate } from "../../../validation";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState(false);

  return (
    <>
      <Header label={"Register"} />
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter email"
              onInput={(e) => {
                const valid = validate("email", { email: e.target.value });
                valid.value ? setEmailError(false) : setEmailError(valid.email);
                e.target.value.length === 0 && setEmailError(false);
              }}
            />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>

            {emailError && (
              <Form.Text className="text-muted">{emailError}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="company">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="company name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="price-plan">Price Plan</Form.Label>
            <Form.Select id="price-plan">
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
        </Form>
      </Modal.Body>
      <Footer screen={0} label={"Login"} />
    </>
  );
};

export default Register;

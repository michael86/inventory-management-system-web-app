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

  const [errors, setErrors] = useState(false);

  const onInput = (target) => {
    const valid = validate(target.name, { [target.name]: target.value });
    console.log(valid);
    const copy = { ...errors };

    target.value.length === 0 || valid.value
      ? (copy[target.name] = false)
      : (copy[target.name] = valid[target.name]);

    setErrors(copy);
  };

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
              name="email"
              onInput={(e) => onInput(e.target)}
            />

            {errors.email && (
              <>
                <Form.Text className="text-danger">{errors.email}</Form.Text>
                <br />
              </>
            )}

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onInput={(e) => onInput(e.target)}
            />
            {errors.password && (
              <>
                <Form.Text className="text-danger">{errors.password}</Form.Text>
                <br />
              </>
            )}
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

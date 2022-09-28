import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Modal, Form } from "react-bootstrap";

import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Input from "../components/Input";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../utils";
import { registerUser } from "../../../reducers/userSlice";

const Register = () => {
  /**
   * Registration form
   * @param {state: local} state simply holds errors which are passed down to the children to show error messages
   * @return {state} calls userSlice and registers user
   */

  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    //check if length of keys is 0. This means no errors. Could poss convert obj to arr
    if (Object.keys(errors).length === 0) {
      dispatch(registerUser(data));
      dispatch(togglePopup());
    }
  };

  const onInput = (e) => setErrors(validateInput(e, errors));

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
            onInput={onInput}
            errors={errors}
            required
          />

          <Input
            type="password"
            controlId="password"
            label="Password"
            classNames={{ group: ["mb-3"] }}
            placeholder="Password"
            custError="Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and be between 8 - 25 chars"
            onInput={onInput}
            errors={errors}
            required
          />

          <Input
            type="text"
            controlId="company"
            label="Company Name"
            classNames={{ group: ["mb-3"] }}
            placeholder="company name"
            custError="Company name can't contain numbers or special characters"
            onInput={onInput}
            errors={errors}
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

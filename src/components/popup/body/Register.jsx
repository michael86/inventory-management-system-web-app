import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Modal, Form } from "react-bootstrap";

import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Input from "../../Generic/Input";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import { setUser } from "../../../reducers/userSlice";

import { registerInputs } from "../schema/genRegisterInputs";

import "../../../styles/Modal.css";

const Register = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    data.pricePlan = Number(data.pricePlan);

    //check if length of keys is 0. This means no errors. Could poss convert obj to arr
    if (!errors || Object.keys(errors).length === 0) {
      dispatch(setUser(data));
      dispatch(togglePopup());
    }
  };

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <>
      <Header label={"Register"} />
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          {registerInputs.map((input, index) => {
            return (
              <Input
                type={input.type}
                controlId={input.controlId}
                label={input.label}
                classNames={input.classNames}
                placeholder={input.placeholder}
                formText={input.formText}
                onInput={onInput}
                custError={input.custError}
                errors={errors}
                required={input.required}
                key={index}
              />
            );
          })}

          <Form.Group className="mb-3">
            <Form.Label htmlFor="pricePlan">Price Plan</Form.Label>
            <Form.Select id="pricePlan" name="pricePlan">
              <option value="0">Free</option>
              <option value="1">Basic</option>
              <option value="2">Advanced</option>
              <option value="3">Pro</option>
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

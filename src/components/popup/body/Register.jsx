import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Modal, Form, Spinner } from "react-bootstrap";

import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Input from "../../Generic/Input";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import {
  setUser,
  setUserEmail,
  setUserToken,
} from "../../../reducers/userSlice";
import { setCompany } from "../../../reducers/companySlice";

import { registerInputs } from "../schema/genRegisterInputs";

import "../../../styles/Modal.css";
import axios from "../../../utils/axiosInstance";
import { setStore } from "../../../localStorage";

const Register = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [userHasAccount, setUserHasAccount] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setUserHasAccount(false);

    const data = Object.fromEntries(new FormData(e.target));

    data.pricePlan = Number(data.pricePlan);

    //check if length of keys is 0. This means no errors. Could poss convert obj to arr
    if (Object.keys(errors).length > 0) return;

    setShowSpinner(true);
    const res = await axios.put(`account/register`, { data });

    setShowSpinner(false);

    if (res.status !== 200) {
      console.log("something went wrong", res);
      return;
    }

    switch (res.data.status) {
      case 1:
        const { data } = res.data;
        dispatch(togglePopup());
        setStore({ key: "token", data: data.user.token });
        dispatch(setUser(data.user));
        dispatch(setCompany(data.company));
        break;
      case 2:
        console.log("case 2");
        setUserHasAccount(true);
        break;
      default:
        break;
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

          {userHasAccount && (
            <p className=" ms-2 text-danger">
              Email is invalid or already registered
            </p>
          )}
          <Buttons
            variant="primary"
            type="submit"
            label={
              showSpinner ? (
                <Spinner animation="border" variant="warning" />
              ) : (
                "Submit"
              )
            }
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

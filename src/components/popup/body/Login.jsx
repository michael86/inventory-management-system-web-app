import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Modal } from "react-bootstrap";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Input from "../../Generic/Input";
import { setStore } from "../../../localStorage";
import { setUserAuthenticated } from "../../../reducers/userSlice";
import axios from "axios";

const Login = () => {
  const url = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const [loginVerified, setLoginVerified] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    const res = await axios.put(`${url}/login`, {
      email: data.email,
      password: data.password,
    });

    if (res.status !== 200) {
      console.log("something broke");
      return;
    }

    switch (res.data.status) {
      case 1: //success
        console.log(res.data);
        dispatch(togglePopup());
        dispatch(setUserAuthenticated());
        setStore({ key: "token", data: res.data.token });
        break;

      case 2: //user not found or invalid password
        setLoginVerified(false);
        break;

        break;
      default:
        break;
    }
  };

  const [errors, setErrors] = useState(false);
  const onInput = (e) => setErrors(validateInput(e));

  return (
    <>
      <Header label={"Login"} />

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
          <Form.Group className="mb-3" controlId="cookies">
            <Form.Check type="checkbox" label="remember me" />
          </Form.Group>

          {!loginVerified && (
            <Form.Group className="mb-3">
              <Form.Text className="text-danger">
                Incorrect email or password
              </Form.Text>
            </Form.Group>
          )}

          <Buttons
            variant="primary"
            type="submit"
            label="Submit"
            secondaryVariant="warning"
            secondaryOnClick={() => dispatch(setPopupScreen(1))}
            secondaryLabel="Register"
            errors={errors}
          />
        </Form>
      </Modal.Body>
    </>
  );
};

export default Login;

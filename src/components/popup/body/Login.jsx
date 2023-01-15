import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import { Form, Modal } from "react-bootstrap";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Input from "../../Generic/Input";
import {
  setUserAuthenticated,
  setUserToken,
} from "../../../reducers/userSlice";
import axios from "../../../utils/axiosInstance";
import { setStore } from "../../../localStorage";

const Login = () => {
  const dispatch = useDispatch();
  const [loginVerified, setLoginVerified] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    const res = await axios.put("/account/login", {
      email,
      password,
    });

    if (res.status !== 200) {
      console.log("something broke");
      return;
    }

    switch (res.data.status) {
      case 1: //success
        dispatch(togglePopup());
        dispatch(setUserAuthenticated(true));
        dispatch(setUserToken(res.data.token));
        setStore({ key: "token", data: res.data.token });

        break;

      case 2: //user not found or invalid password
        dispatch(setUserAuthenticated(false));
        setLoginVerified(false);
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

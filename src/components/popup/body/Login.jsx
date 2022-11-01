import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Modal } from "react-bootstrap";

import { setPopupScreen, togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Input from "../../Generic/Input";
import { getStore } from "../../../localStorage";
import { setUserAuthenticated } from "../../../reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [accountFound, setAccountFound] = useState(true);
  const [loginAuthed, setLoginAuthed] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const user = getStore("user");

    if (!user) {
      setAccountFound(false);
      return;
    }

    user.email !== data.email ||
      (user.password !== data.password && setLoginAuthed(false));

    if (user.email === data.email && user.password === data.password) {
      dispatch(togglePopup());
      dispatch(setUserAuthenticated());
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

          {!accountFound && (
            <Form.Group className="mb-3">
              <Form.Text className="text-danger">Account not found</Form.Text>
            </Form.Group>
          )}

          {!loginAuthed && (
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

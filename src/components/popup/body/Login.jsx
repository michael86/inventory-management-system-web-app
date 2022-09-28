import React from "react";
import { useDispatch } from "react-redux";

import { Form, Modal } from "react-bootstrap";

import { setPopupScreen } from "../../../reducers/popupSlice";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Input from "../components/Input";

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
  };

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
            required
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="remember me" />
          </Form.Group>

          <Buttons
            variant="primary"
            type="submit"
            label="Submit"
            secondaryVariant="warning"
            secondaryOnClick={() => dispatch(setPopupScreen(1))}
            secondaryLabel="Register"
          />
        </Form>
      </Modal.Body>
    </>
  );
};

export default Login;
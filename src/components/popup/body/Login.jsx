import React from "react";
import { useDispatch } from "react-redux";

import { Form, Modal } from "react-bootstrap";

import { setPopupScreen } from "../../../reducers/popupSlice";

import Buttons from "../components/Buttons";
import Header from "../components/Header";

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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

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

import React from "react";
import { Form, Modal } from "react-bootstrap";

import Footer from "../Footer";
import Header from "../Header";

const Login = () => {
  return (
    <>
      <Header label={"Login"} />

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="remember me" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Footer screen={1} label={"Register"} />
    </>
  );
};

export default Login;

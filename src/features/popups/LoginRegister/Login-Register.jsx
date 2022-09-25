import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { togglePopup, setScreen, setErrors } from "./Login-RegisterSlice";
import { validate } from "../../../validation";

import { setAuthenticated } from "../../user/userSlice";

function Popup() {
  const { show, screen, errors } = useSelector(
    (state) => state.loginRegisterPopup
  );

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (screen === 0) {
      const form = document.getElementById("home-form");
      const { email, password, remember } = form.elements;
      const payload = {
        email: email.value,
        password: password.value,
        // remember: remember.checked, not needed as validating
      };

      const valid = validate("login", payload);
      dispatch(setErrors(valid.invalid ? valid : {}));

      if (!valid.invalid) {
        dispatch(setAuthenticated());
        dispatch(togglePopup());
      }
    } else {
      dispatch(setScreen(0));
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          dispatch(togglePopup());
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{screen === 0 ? "Login" : "register"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id="home-form">
            <Form.Group className="mb-3" controlId="user-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              {errors.email && <Form.Text muted>{errors.email}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="user-password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              {errors.password && (
                <>
                  <Form.Text className="text-danger" muted>
                    Password must be between 8 and 25 characters.
                  </Form.Text>
                  <br />
                  <Form.Text className="text-danger" muted>
                    Include 1 uppercase, 1 lowercase, 1 number and 1 special
                    character
                  </Form.Text>
                </>
              )}
            </Form.Group>

            {screen === 1 && (
              <>
                <Form.Group className="mb-3" controlId="user-company">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    name="company"
                    required
                  />
                  {errors.company && (
                    <Form.Text className="text-danger" muted>
                      Company name required
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="user-price-plan">
                  <Form.Label>Price Plan</Form.Label>

                  <Form.Select name="price-plan">
                    <option>Free</option>
                    <option>Basic</option>
                    <option>Standard</option>
                    <option>Pro</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}

            {screen === 0 && (
              <Form.Group className="mb-3" controlId="user-cookie">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  name="remember"
                />
              </Form.Group>
            )}

            <Button
              variant="primary"
              className="me-2"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (screen === 1) {
                  const form = document.getElementById("home-form");

                  const { email, password, company } = form.elements;

                  const payload = {
                    email: email.value,
                    password: password.value,
                    company: company.value,
                  };

                  const valid = validate("register", payload);

                  dispatch(setErrors(valid.invalid ? valid : {}));
                } else {
                  dispatch(setScreen(1));
                }
              }}
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;

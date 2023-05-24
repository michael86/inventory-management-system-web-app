import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

import { togglePopup } from "../../../reducers/popupSlice";
import { validateInput } from "../../../validation/Utils";

import Header from "./Header";
import Input from "../../Shared/Input";
import { setUserAuthenticated, setUserEmail } from "../../../reducers/userSlice";
import axios from "../../../utils/axios";
import { setCompany } from "../../../reducers/companySlice";
import { setStore } from "../../../localStorage";

const Login = () => {
  const dispatch = useDispatch();
  const [loginVerified, setLoginVerified] = useState(true);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (errors && Object.keys(errors).length > 0) return;
    const { email, password } = Object.fromEntries(new FormData(e.target));

    const res = await axios.put("/account/login", {
      email,
      password,
    });

    if (res.status !== 200) return;

    switch (res.data.status) {
      case 1: //success
        dispatch(togglePopup());
        dispatch(setUserAuthenticated(true));
        dispatch(setUserEmail(email));

        const { company_id, ...company } = res.data?.company;

        dispatch(setCompany(company));
        setStore({ key: "company", data: company });
        navigate("/dashboard");
        break;

      case 2: //user not found or invalid password
        dispatch(setUserAuthenticated(false));
        setLoginVerified(false);
        break;

      default:
        break;
    }
  };

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
              <Form.Text className="text-danger">Incorrect email or password</Form.Text>
            </Form.Group>
          )}

          <Link
            to="forgot-password"
            onClick={() => dispatch(togglePopup())}
            className="text-primary "
          >
            Forgot Password
          </Link>

          <div className="mt-2">
            <Button variant="primary" type="submit" className="me-2">
              Submit
            </Button>

            <Link to={"/register"} onClick={() => dispatch(togglePopup())}>
              <Button variant="warning">Register</Button>
            </Link>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
};

export default Login;

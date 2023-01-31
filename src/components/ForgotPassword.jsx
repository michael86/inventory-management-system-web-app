import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { validateInput } from "../validation/Utils";
import Input from "./Generic/Input";
import axios from "../utils/axiosInstance";

const ForgotPassword = () => {
  const [errors, setErrors] = useState(false);
  const onInput = (e) => setErrors(validateInput(e, errors));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (errors && Object.keys(errors).length > 0) return;
    const { email } = Object.fromEntries(new FormData(e.target));

    axios.put("/account/forgot-password", { email });
  };
  return (
    <>
      <h1 className="text-center">Forgot Password</h1>

      <Container className="w-50">
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            controlId="email"
            label="Email Address"
            classNames={{ group: ["mb-3"], formText: ["text-muted"] }}
            placeholder="Enter Email"
            onInput={onInput}
            errors={errors}
            required
          />
          <Button variant="warning mb-3" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPassword;

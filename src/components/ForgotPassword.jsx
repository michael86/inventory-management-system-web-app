import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { validateInput } from "../validation/Utils";
import Input from "./Generic/Input";
import axios from "../utils/axiosInstance";

const ForgotPassword = () => {
  const [errors, setErrors] = useState(false);
  const [sentMessage, setSentMessage] = useState();
  const onInput = (e) => setErrors(validateInput(e, errors));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (errors && Object.keys(errors).length > 0) return;
    const { email } = Object.fromEntries(new FormData(e.target));

    const res = await axios.put("/account/forgot-password", { email });

    res.data.status
      ? setSentMessage(
          "An email has been sent, don't forget to check your spam "
        )
      : setSentMessage("Error Sending Email, please try again later");

    setTimeout(() => setSentMessage(), 3000);
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
        {sentMessage && <p className="text-success">{sentMessage}</p>}
      </Container>
    </>
  );
};

export default ForgotPassword;

import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "../utils/axiosInstance";
import { validateInput } from "../validation/Utils";
import Input from "./Generic/Input";

const ResetPassword = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const formRef = useRef();

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [errors, setErrors] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if ((errors && Object.keys(errors).length > 0) || !passwordsMatch) return;

    let { token, email } = params;

    const reset = await axios.patch(
      `account/reset-password/${token}/${email}/${formData.password}`
    );
  };

  const onInput = (e) => {
    setErrors(validateInput(e));
    if (e.target.type === "password")
      setPasswordsMatch(formRef.current[0].value === formRef.current[1].value);
  };

  return (
    <>
      <h1 className="text-center">Reset Password</h1>
      <Container>
        <Form onSubmit={onSubmit} onInput={onInput} ref={formRef}>
          <Input
            type="password"
            controlId="password"
            label="Password"
            classNames={{ group: ["mb-3"], formText: ["text-muted"] }}
            placeholder="Enter Password"
            errors={errors}
            required
          />
          <Input
            type="password"
            controlId="confirm-password"
            label="Confirm Password"
            classNames={{ group: ["mb-3"], formText: ["text-muted"] }}
            placeholder="Enter Password"
            errors={errors}
            required
          />

          {!passwordsMatch && (
            <p className="text-danger">Passwords don't match</p>
          )}

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default ResetPassword;

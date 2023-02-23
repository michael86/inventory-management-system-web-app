import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "../../utils/axios";
import { validateInput } from "../../validation/Utils";
import Input from "../Shared/Input";

const ResetPassword = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const formRef = useRef();

  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [errors, setErrors] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if ((errors && Object.keys(errors).length > 0) || !passwordsMatch) return;

    let { token, email } = params;

    const res = await axios.patch(
      `account/reset-password/${token}/${email}/${formData.password}`
    );

    res.data.status
      ? setPasswordChanged(
          "Your password has been updated, you can now log in with your new password"
        )
      : setPasswordChanged(
          "An error occurred when updating your password. Please try again or request a new email"
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
        {passwordChanged && <p className="text-info">{passwordChanged}</p>}
      </Container>
    </>
  );
};

export default ResetPassword;

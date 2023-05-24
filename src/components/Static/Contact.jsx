import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Input from "../Shared/Input";
import { inputs } from "../../schema/contactSchema";
import { validateInput } from "../../validation/Utils";
import "../../styles/Forms.css";

import axios from "../../utils/axios";

const Contact = () => {
  const { authenticated } = useSelector((state) => state.user);
  const [errors, setErrors] = useState();

  const onInput = (e) => setErrors(validateInput(e, errors));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) return;

    const { target: form } = e;
    const data = Object.fromEntries(new FormData(form));
    if (!data.message.length) return;

    const sent = await axios.put("/account/support", { ...data });
    console.log("sent", sent);
  };

  return (
    <section className="contact contact-form">
      <div className="text-center">
        <h3>Contact</h3>
        {authenticated ? (
          <p>
            If you have an issue with your account, please contact support. All other enquires
            should be sent to your account admin.
          </p>
        ) : (
          <p>
            If you would like to request a demo, please contact accounts. All other enquires can be
            sent to support
          </p>
        )}
      </div>
      <Form className="container w-lg-50" onSubmit={onSubmit}>
        {inputs.map((input, index) => {
          return (
            <Input
              type={input.type}
              controlId={input.controlId}
              label={input.label}
              classNames={input.classNames}
              placeholder={input.placeholder}
              formText={input.formText}
              onInput={onInput}
              custError={input.custError}
              errors={errors}
              required={input.required}
              key={index}
            />
          );
        })}

        <Form.Group controlId="option">
          <Form.Label>Send to</Form.Label>
          <Form.Select aria-label="send to" name="option">
            <option value="1">Support</option>
            {!authenticated && <option value="3">Accounts - Request Demo</option>}
            {authenticated && <option value="2">Company Admin</option>}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </section>
  );
};

export default Contact;

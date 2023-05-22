import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Input from "../Shared/Input";
import { inputs } from "../../schema/contactSchema";
import { validateInput } from "../../validation/Utils";
import "../../styles/Forms.css";
import Buttons from "../popup/components/Buttons";

const Contact = () => {
  const { authenticated } = useSelector((state) => state.user);
  const [errors, setErrors] = useState();
  console.log(inputs);
  const onInput = (e) => setErrors(validateInput(e, errors));

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
      <Form className="container w-lg-50">
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
        <Form.Label htmlFor="option">Send to</Form.Label>
        <Form.Select aria-label="send to" id="option">
          <option value="1">Support</option>
          {!authenticated && <option value="3">Accounts - Request Demo</option>}
          {authenticated && <option value="2">Company Admin</option>}
        </Form.Select>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Your message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Buttons variant="primary" type="submit" label={"Send"} />
      </Form>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { validateInput } from "../../validation/Utils";
import Input from "../Utils/Input";

import { companySchema } from "./schema/companySettings";

const CompanySettings = () => {
  const [errors, setErrors] = useState(false);

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <Container className="mt-2 p-4 bg-light border rounded">
      <Form>
        <h3 className="text-center">Company Settings</h3>
        <Form.Group>
          {companySchema.map((input, index) => {
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
        </Form.Group>
        <Button type="submit" className="mx-auto ">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default CompanySettings;

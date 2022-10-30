import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { validateInput } from "../../validation/Utils";
import Input from "../Utils/Input";

import { companySettings } from "./schema/companySettings";

const CompanySettings = () => {
  const [errors, setErrors] = useState(false);

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="companyName">Company Name</Form.Label>
        {companySettings.map((input, index) => {
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
    </Form>
  );
};

export default CompanySettings;

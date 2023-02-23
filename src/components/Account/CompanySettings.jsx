import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

import { companySchema } from "./schema/companySettings";
import { setUser } from "../../reducers/userSlice";

import { validateInput } from "../../validation/Utils";
import { onSaveSettings } from "../../utils/account/index";

import Input from "../Shared/Input";

const CompanySettings = () => {
  const [errors, setErrors] = useState(false);
  const [saved, setSaved] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <Container className="mt-2 p-4 bg-light border rounded">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            setUser(
              onSaveSettings(
                Object.fromEntries(new FormData(e.target)),
                { ...user },
                () => {
                  setSaved(true);
                  setTimeout(() => setSaved(false), 3000);
                }
              )
            )
          );
        }}
      >
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
        <div className="d-flex align-content-center">
          <Button type="submit" className=" mt-3">
            Save
          </Button>
          {saved && <p className="text-success mx-auto fs-4">Settings saved</p>}
        </div>
      </Form>
    </Container>
  );
};

export default CompanySettings;

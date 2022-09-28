import React from "react";

import { Form } from "react-bootstrap";

import { validate } from "../../../validation";
import { useState } from "react";

const Input = (props) => {
  /**
   * Dynamically generates a form group to be used within a form aswell as validate the form.
   *
   * @Required
   * @param {props} I mean... Props :P !
   * @param {props.type} Type of input we require
   * @param {props.controlId} Sets the id 'for' and 'id' to link label to input, also used for validation and error messages
   * @param {props.label} The label text
   *
   * @Optional
   * @param {props.classNames} Object containing children for form group and form text.
   * @param {props.placeholder} param that will set the placeholder text
   * @param {props.formText} if extra text is required, will add a formText componet with the value of prop
   * @param {props.required} Set input to required
   * @param {props.custError} A custom error message
   *
   * @return {component} bootstrap input component
   */

  const {
    controlId,
    classNames,
    label,
    type,
    placeholder,
    formText,
    required,
    custError,
  } = props;

  const [errors, setErrors] = useState(false);

  const onInput = (e) => {
    const { target } = e;

    const valid = validate(target.name, { [target.name]: target.value });

    const copy = { ...errors };

    target.value.length === 0 || valid.value
      ? (copy[target.name] = false)
      : (copy[target.name] = valid[target.name]);

    setErrors(copy);
  };

  return (
    <Form.Group
      className={classNames?.group?.map((className) => className)}
      controlId={controlId}
    >
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder && placeholder}
        required={required}
        onInput={onInput}
        name={controlId}
      />

      {formText && (
        <Form.Text
          className={classNames?.formText?.map((className) => className)}
        >
          {formText}
        </Form.Text>
      )}

      {errors[controlId] && (
        <>
          {formText && <br />}
          <Form.Text className="text-danger">
            {custError ? custError : errors[controlId]}
          </Form.Text>
        </>
      )}
    </Form.Group>
  );
};

export default Input;

//Work on this when not so tired.

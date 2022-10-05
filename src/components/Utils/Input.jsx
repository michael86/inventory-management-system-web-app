import React from "react";

import { Form } from "react-bootstrap";

const Input = (props) => {
  /**
   * Dynamically generates a form group to be used within a form. Also accepts a cb on input, this can be used to elevate back to parent. I.E to validate a form .
   *
   * @Required
   * @param {props} I mean... Props :P !
   * @param {props.type} Type of input we require
   * @param {props.controlId} Sets the id 'for' and 'id' to link label to input
   * @param {props.label} The label text
   *
   * @Optional
   * @param {props.classNames} Object containing children for form group and form text.
   * @param {props.placeholder} param that will set the placeholder text
   * @param {props.formText} if extra text is required, will add a formText componet with the value of prop
   * @param {props.required} Set input to required
   * @param {props.onInput} A callback, generally going to be used to elevate state to parent and display an error message
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
    onInput,
    errors,
    custError,
  } = props;

  return (
    <Form.Group
      className={classNames?.group && [...classNames.group].join(" ")}
      controlId={controlId}
    >
      <Form.Label
        className={classNames?.label && [...classNames.label].join(" ")}
      >
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder && placeholder}
        required={required}
        onInput={onInput}
        name={controlId}
        className={classNames?.control && [...classNames.control].join(" ")}
      />

      {formText && (
        <Form.Text className={[...classNames.formText]}>{formText}</Form.Text>
      )}

      {errors && errors[controlId] && (
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

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
   * @param {props.onInput}  generally going to be used to elevate state to parent and display an error message
   * @param {props.onKeyDown}  generally going to be used to check for illegal keys on number inputs (e - + )
   * @param {props.value}  Set pre field input
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
    onKeyDown,
    errors,
    custError,
    min,
    max,
  } = props;

  console.log("min", min);

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
        min={min} //If type is number
        max={max}
        placeholder={placeholder && placeholder}
        required={required}
        onInput={onInput}
        onKeyDown={(e) => onKeyDown(e, type)}
        name={controlId}
        className={classNames?.control && [...classNames.control].join(" ")}
      />

      {formText && (
        <Form.Text className={[...classNames.formText]}>{formText}</Form.Text>
      )}

      {errors && errors[controlId] && (
        <>
          {formText && <br />}
          <Form.Text
            className={`text-danger ${
              classNames?.error && [...classNames.error].join(" ")
            }`}
          >
            {custError ? custError : errors[controlId]}
          </Form.Text>
        </>
      )}
    </Form.Group>
  );
};

export default Input;

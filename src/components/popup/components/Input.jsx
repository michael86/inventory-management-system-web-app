import React from "react";

import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} />
      <Form.Text className={props.classNames.map((className) => className)}>
        {props.formText}
      </Form.Text>
    </Form.Group>
  );
};

export default Input;

//Work on this when not so tired.

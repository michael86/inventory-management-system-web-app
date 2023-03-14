import React from "react";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { validateInput } from "../../../validation/Utils";

import Input from "../../Shared/Input";

import "../../../styles/Invoice.css";

const GenInvoiceCard = (props) => {
  const { headerText, onClick, inputs, footer, className, onDelete, errors, setErrors } = props;

  const onInput = (e) => {
    const res = validateInput(e, errors);
    res && setErrors(res);
  };

  const onKeyDown = (e, type) => {
    if (type !== "number") return;
    const { key } = e;
    if (key === "e" || key === "-" || key === "+") e.preventDefault();
  };

  return (
    <Card className={`shadow ${className}`} onClick={onClick}>
      <Card.Header className="text-center bg-primary text-light fs-4 ">{headerText}</Card.Header>

      <Card.Body className="bg-light">
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
              onKeyDown={onKeyDown}
              errors={errors}
              custError={input.custError}
              required={input.required}
              key={index}
              min={input.min}
              max={input.max}
              value={input.value}
              step={input.step}
            />
          );
        })}
      </Card.Body>

      {footer && (
        <Card.Footer>
          <Row>
            <Col xs={2}>
              <Button onClick={footer.onClick} className="mb-2">
                {footer.text}
              </Button>
            </Col>
            <Col xs={12}>
              <div className="d-flex flex-row flex-wrap justify-content-center">
                {footer.items.map((item, index) => {
                  return (
                    <Badge pill bg="primary me-2 mb-2 fs-6" key={index}>
                      {`${item.name}: qty ${item.quantity}`}
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => onDelete(item.name)}
                        className="ms-2"
                      />
                    </Badge>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default GenInvoiceCard;

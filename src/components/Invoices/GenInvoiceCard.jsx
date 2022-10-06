import React, { useState } from "react";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import Input from "../Utils/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { validateInput } from "../Utils";

import "./../../styles/Invoice.css";

const GenInvoiceCard = (props) => {
  const { headerText, onClick, inputs, footer, className, onDelete } = props;

  const [errors, setErrors] = useState();

  const onInput = (e) => setErrors(validateInput(e, errors));

  return (
    <Card className={`shadow ${className}`} onClick={onClick}>
      <Card.Header className="text-center bg-primary text-light fs-4 ">
        {headerText}
      </Card.Header>
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
              errors={errors}
              custError={input.custError}
              required={input.required}
              key={index}
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
                {footer.items.map((item) => {
                  return (
                    <Badge pill bg="primary me-2 mb-2 fs-6" key={item.id}>
                      {`${item.item}: qty ${item.quantity}`}
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        onClick={() => onDelete(item.id)}
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

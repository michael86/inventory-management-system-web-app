import React from "react";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import Input from "../Utils/Input";

const GenInvoiceCard = ({ headerText, onClick, inputs, footer, className }) => {
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
              onInput={input.onInput}
              errors={input.errors}
              required={input.required}
              key={index}
            />
          );
        })}
      </Card.Body>

      {footer && (
        <Card.Footer>
          <Row>
            <Col xs>
              <Button onClick={footer.onClick}> {footer.text}</Button>
            </Col>
            <Col xs={10}>
              {footer.items.map((item) => {
                return (
                  <Badge pill bg="primary me-2 fs-6">
                    {`${item.item} x ${item.quantity}`}
                    {/* <Button
                      variant="outline-warning"
                      className="ms-2 border-circle"
                    >
                      x
                    </Button>  
                    add font awesome here for closing
                    */}
                  </Badge>
                );
              })}
            </Col>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default GenInvoiceCard;

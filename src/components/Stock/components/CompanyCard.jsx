import React from "react";
import { Card } from "react-bootstrap";
import Input from "../../Generic/Input";
import { addStock } from "../Schema/addStock";

const CompanyCard = ({ onInput, errors }) => {
  return (
    <Card className="shadow">
      <Card.Title className="bg-primary p-2 rounded-top">Company</Card.Title>
      <Card.Subtitle className="px-2">
        Company details item was purchased from
      </Card.Subtitle>
      <Card.Body className="bg-light p-2">
        {addStock.map((input, index) => {
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
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;

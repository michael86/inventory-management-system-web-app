import React from "react";
import { Button } from "react-bootstrap";

const Buttons = (props) => {
  return (
    <>
      <Button variant={props.variant} type={props.type} className="me-3">
        {props.label}
      </Button>

      {props.secondaryVariant && (
        <>
          <Button
            variant={props.secondaryVariant}
            onClick={() => props.secondaryOnClick()}
          >
            {props.secondaryLabel}
          </Button>
        </>
      )}
    </>
  );
};

export default Buttons;

import React from "react";
import { Button } from "react-bootstrap";

const Buttons = (props) => {
  return (
    <div className="mt-2">
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
    </div>
  );
};

export default Buttons;

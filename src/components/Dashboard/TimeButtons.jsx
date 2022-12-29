import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { makeMonthReadable } from "../../utils";

const Timebuttons = ({ year, month, onTimeChange }) => {
  const dateObject = useSelector((state) => state.dateObject.dateObject);
  return (
    <>
      <div className="d-flex justify-content-center">
        {Object.keys(dateObject).map((objectYear) => {
          return (
            <Button
              key={objectYear}
              size="sm"
              variant={+objectYear === +year ? "primary" : "secondary"}
              className="me-2"
              onClick={() => onTimeChange(objectYear, month)}
            >
              {objectYear}
            </Button>
          );
        })}
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {Object.keys(dateObject[year]).map((objectMonth) => {
          return (
            <Button
              key={objectMonth}
              size="sm"
              variant={+objectMonth === +month ? "primary" : "secondary"}
              className="me-2 mt-2"
              onClick={() => onTimeChange(year, objectMonth)}
            >
              {makeMonthReadable(objectMonth)}
              <Badge
                className="ms-2"
                bg={+objectMonth === +month ? "secondary" : "primary"}
                onClick={() => onTimeChange(year, objectMonth)}
              >
                {Object.keys(dateObject[year][objectMonth]).length} skus
              </Badge>
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Timebuttons;

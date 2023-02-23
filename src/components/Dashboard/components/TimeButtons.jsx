import React from "react";
import { Badge, Button } from "react-bootstrap";

import { makeMonthReadable } from "../../../utils/dates";

const Timebuttons = ({
  dateObject,
  year,
  month,
  onYearChange,
  onMonthChange,
}) => {
  return (
    <>
      {dateObject && (
        <div className="d-flex justify-content-center">
          {Object.keys(dateObject).map((objectYear) => {
            return (
              <Button
                key={objectYear}
                size="sm"
                variant={+objectYear === +year ? "primary" : "secondary"}
                className="me-2"
                onClick={() => onYearChange(objectYear)}
              >
                {objectYear}
              </Button>
            );
          })}
        </div>
      )}

      <div className="d-flex flex-wrap justify-content-center">
        {dateObject[year] ? (
          Object.keys(dateObject[year]).map((objectMonth) => {
            return (
              <Button
                key={objectMonth}
                size="sm"
                variant={+objectMonth === +month ? "primary" : "secondary"}
                className="me-2 mt-2"
                onClick={() => onMonthChange(objectMonth)}
              >
                {makeMonthReadable(objectMonth)}
                <Badge
                  className="ms-2"
                  bg={+objectMonth === +month ? "secondary" : "primary"}
                  onClick={() => onMonthChange(objectMonth)}
                >
                  {Object.keys(dateObject[year][objectMonth]).length} skus
                </Badge>
              </Button>
            );
          })
        ) : (
          <h1>No stock in our system</h1>
        )}
      </div>
    </>
  );
};

export default Timebuttons;

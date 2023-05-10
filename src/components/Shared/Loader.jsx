import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Spinner variant="primary" className="mx-auto" />
        <h1>Loading</h1>
        <p className="h3 text-muted">This may take a while based on the size of your assets</p>
      </div>
    </>
  );
};

export default Loader;

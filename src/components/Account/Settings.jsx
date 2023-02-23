import React from "react";
import { Row, Col } from "react-bootstrap";

import AccountSettings from "./AccountSettings";
import CompanySettings from "./CompanySettings";

const Settings = () => {
  return (
    <Row>
      <Col xs={12}>
        <AccountSettings />
      </Col>
      <Col xs={12}>
        <CompanySettings />
      </Col>
    </Row>
  );
};

export default Settings;

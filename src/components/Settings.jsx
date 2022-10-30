import React from "react";
import { Row, Col } from "react-bootstrap";

import AccountSettings from "./Settings/AccountSettings";
import CompanySettings from "./Settings/CompanySettings";

const Settings = () => {
  return (
    <Row>
      <Col xs={12} lg={6}>
        <AccountSettings />
      </Col>
      <Col xs={12} lg={6}>
        <CompanySettings />
      </Col>
    </Row>
  );
};

export default Settings;

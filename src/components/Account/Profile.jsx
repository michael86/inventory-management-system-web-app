import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Row, Col, Card, Button, Container } from "react-bootstrap";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);

  const hidePassword = () => [...user.password].map((letter) => "*");

  const getpricePlanString = () => {
    switch (user.pricePlan) {
      case 0:
        return "free";
      case 1:
        return "basic";
      case 2:
        return "advanced";
      case 3:
        return "pro";
      default:
        break;
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <Card>
            <div className="p-4 pb-0">
              <Card.Title>User</Card.Title>
              <Card.Subtitle>User Details</Card.Subtitle>
            </div>

            <Card.Body className="px-4">
              <Card.Text>
                <strong>email</strong>: {user.email}
              </Card.Text>
              <Card.Text>
                <strong>password</strong>:&nbsp;
                {showPassword ? user.password : hidePassword()}
              </Card.Text>
              <Card.Text>
                <strong>currency</strong>: {user.currency}
              </Card.Text>
              <Card.Text>
                <strong>price plan</strong>: {getpricePlanString()}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => setShowPassword(!showPassword)}>
                Show Password
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} lg={6} className="mt-3 mt-lg-0">
          <Card>
            <div className="p-4 pb-0">
              <Card.Title>Company</Card.Title>
              <Card.Subtitle>Company Details</Card.Subtitle>
            </div>

            <Card.Body className="px-4">
              <Card.Text>
                <strong>company name</strong>: {user.company}
              </Card.Text>
              <Card.Text>
                <strong>company address</strong>: {user.companyStreet}
              </Card.Text>
              <Card.Text>
                <strong>company city</strong>: {user.companyCity}
              </Card.Text>
              <Card.Text>
                <strong>company county</strong>: {user.companyCounty}
              </Card.Text>
              <Card.Text>
                <strong>company postcode</strong>: {user.companyPostcode}
              </Card.Text>
              <Card.Text>
                <strong>company country</strong>: {user.companyCountry}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

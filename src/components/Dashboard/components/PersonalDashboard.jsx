import { Container } from "react-bootstrap";

const PersonalDashboard = () => {
  return (
    <Container className="text-center mt-5">
      <h1>No compand found</h1>
      <p>We couldn't find a company linked to your account.</p>
      <p>Please contact your account admin and ask them to send you an invite.</p>
      <p>Keep an eye out in your emails and click the link provided.</p>
    </Container>
  );
};

export default PersonalDashboard;

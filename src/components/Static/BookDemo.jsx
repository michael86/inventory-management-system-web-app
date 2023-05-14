import { Form, InputGroup, FloatingLabel, Button } from "react-bootstrap";

const BookDemo = () => {
  return (
    <Form className="mb-5">
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
      </InputGroup>
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <Button className="w-100">Request a Demo</Button>
    </Form>
  );
};

export default BookDemo;

import { Button, Container, Form } from "react-bootstrap";
import Input from "../Shared/Input";
import { useState } from "react";
import { validateInput } from "../../validation/Utils";
import axios from "../../utils/axios";

const AddUser = () => {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (errors && Object.keys(errors).length > 0) return;
    const { email } = Object.fromEntries(new FormData(e.target));

    const res = await axios.put("/account/add-user", { email });

    if (res.status !== 200) return;
  };

  const onInput = (e) => setErrors(validateInput(e));

  return (
    <Container className="mt-4 text-center">
      <h1>Add user</h1>

      <Form className="w-50 mx-auto">
        <Input
          type={"email"}
          controlId={"email"}
          label={"Email"}
          classNames={"mt-2"}
          placeholder={"User Email"}
          onInput={onInput}
          errors={errors}
          required={true}
        />
        {sent && <p className="mt-2 text-success">Invite Sent - Don't forget to check your spam</p>}
        <Button className={!sent && "mt-2"}>Submit</Button>
      </Form>
    </Container>
  );
};

export default AddUser;

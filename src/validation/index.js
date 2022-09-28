import { jValidate } from "./joi";
import { email, login, register, password, company } from "./schema/schemas";

export const validate = (type, payload) => {
  switch (type) {
    case "login":
      return jValidate(login, payload);
    case "register":
      return jValidate(register, payload);
    case "email":
      return jValidate(email, payload);
    case "password":
      return jValidate(password, payload);
    case "company":
      return jValidate(company, payload);
    default:
      console.log("Something broke! Type was", type);
      break;
  }
};

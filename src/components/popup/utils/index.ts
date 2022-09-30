import { validate } from "../../../validation";

interface Target {
  name: String;
  value: String;
}

export const validateInput = (target: Target, errors) => {
  const valid = validate(target.name, { [target.name]: target.value });

  const copy = { ...errors };

  target.value.length === 0 || valid.value
    ? delete copy[target.name]
    : (copy[target.name] = valid[target.name]);

  return copy;
};

// export const validateForm = (payload) => {
//   //Temp solution. Will
//   const email = validate("email", { email: payload.email });
//   const password = validate("password", { password: payload.password });
//   const company = validate("company", { company: payload.company });

//   return email.value && password.value && company.value ? true : false;
// };

import { validate } from "../../../validation";

export const validateForm = (e) => {
  const { target } = e;

  const valid = validate(target.name, { [target.name]: target.value });

  const errors = {};
  target.value.length === 0 || valid.value
    ? (errors[target.name] = false)
    : (errors[target.name] = valid[target.name]);

  return errors;
};

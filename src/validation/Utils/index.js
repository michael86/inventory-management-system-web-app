import { validate } from "..";

export const validateInput = (e, errors) => {
  const { target } = e;

  const valid = validate(target.name, { [target.name]: target.value });
  console.log(valid);
  if (!valid) return; // Type wasn't in schema (no validation required)

  const copy = { ...errors };

  target.value.length === 0 || valid.value
    ? delete copy[target.name]
    : (copy[target.name] = valid[target.name]);

  return copy;
};

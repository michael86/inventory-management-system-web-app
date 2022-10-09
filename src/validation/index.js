import { jValidate } from "./joi";
import { schema } from "./schema/schemas";

export const validate = (type, payload) => {
  console.log(type);
  if (!schema[type]) return;
  return jValidate(schema[type], payload);
};

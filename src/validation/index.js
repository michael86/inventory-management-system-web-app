import { jValidate } from "./joi";
import { schema } from "./schema/schemas";

export const validate = (type, payload) => {
  if (!schema[type]) {
    console.log("schema type didn't exist");
    return;
  }

  return jValidate(schema[type], payload);
};

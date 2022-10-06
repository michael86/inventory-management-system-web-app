import { jValidate } from "./joi";
import { schema } from "./schema/schemas";

export const validate = (type, payload) => {
  if (!schema[type]) {
    console.log("schema type didn't exist");
    return []; //Return empty array as expect at least an array back
  }

  return jValidate(schema[type], payload);
};

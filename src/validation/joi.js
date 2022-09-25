import Joi from "joi";

const genErrorLog = (payload) => {
  const errs = {
    invalid: true,
  };

  payload.error.details.forEach(
    (error) => (errs[error.context.key] = error.message)
  );

  return errs;
};

export const jValidate = (schema, payload) => {
  const j = Joi.object(schema);
  let valid = j.validate(payload, { abortEarly: false });
  return valid.error ? genErrorLog(valid) : valid;
};

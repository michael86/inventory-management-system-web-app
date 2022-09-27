import Joi from "joi";

const genErrorLog = (payload) => {
  const errs = {};

  payload.error.details.forEach(
    (error) => (errs[error.context.key] = error.message)
  );

  return errs;
};

export const jValidate = (schema, payload) => {
  const j = Joi.object(schema);
  const res = j.validate(payload, { abortEarly: false });
  return res.error ? genErrorLog(res) : res;
};

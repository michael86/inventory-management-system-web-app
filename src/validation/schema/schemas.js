import Joi from "joi";

export const login = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(), //Fount this on stack overflow. Checks it contains at 1 upper case and 1 lower case, 1 number and 1 special character.
};

export const register = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(), //Fount this on stack overflow. Checks it contains at 1 upper case and 1 lower case, 1 number and 1 special character.
  company: Joi.string().required(),
};

export const email = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
};

export const password = {
  password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
  // .messages(
  //   "Password must contain 1 lowercase, 1 uppercase, 1 number and 1 special character"
  // ), //Fount this on stack overflow. Checks it contains at 1 upper case and 1 lower case, 1 number and 1 special character.
};

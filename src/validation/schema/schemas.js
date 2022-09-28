import Joi from "joi";

export const login = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) //Fount this on stack overflow. Checks it contains at 1 upper case and 1 lower case, 1 number and 1 special character.
    .required(),
};

export const register = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required(),
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
};

export const company = {
  password: Joi.string().min(1).required(),
};

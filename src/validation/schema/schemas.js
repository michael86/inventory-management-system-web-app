import Joi from "joi";

const email = Joi.string()
  .email({ tlds: { allow: false } })
  .required();

const password = Joi.string()
  .min(8)
  .max(25)
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/) //Fount this on stack overflow. Checks it contains at 1 upper case and 1 lower case, 1 number and 1 special character.
  .required();

const basicString = Joi.string()
  .min(1)
  .pattern(/^[a-z A-Z]+$/)
  .required();

const stringWithNumbers = Joi.string()
  .min(1)
  .pattern(/^[a-z A-Z 0-9]+$/)
  .required();

const anyString = Joi.string().required();

const greaterThanMinusZero = Joi.number().greater(-1);
const mustBeInt = Joi.number().greater(-1).integer();

export const schema = {
  login: {
    email,
    password,
  },

  register: {
    email,
    password,
    company: anyString,
  },

  email: {
    email,
  },

  password: {
    password,
  },

  company: {
    company: basicString,
  },

  invoiceCompanyName: {
    invoiceCompanyName: basicString,
  },
  invoiceContactName: {
    invoiceContactName: basicString,
  },
  invoiceCompanyAddress: {
    invoiceCompanyAddress: stringWithNumbers,
  },
  invoiceCompanyCity: {
    invoiceCompanyCity: basicString,
  },
  invoiceCompanyState: {
    invoiceCompanyState: basicString,
  },
  invoiceCompanyCountry: {
    invoiceCompanyCountry: basicString,
  },
  invoiceCompanyPostcode: {
    invoiceCompanyPostcode: stringWithNumbers,
  },
  quantity: {
    quantity: mustBeInt,
  },
  price: {
    price: greaterThanMinusZero,
  },
  tax: {
    tax: greaterThanMinusZero,
  },
};

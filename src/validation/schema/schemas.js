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

const greaterThanZero = Joi.number().greater(0);
const greaterThanMinus = Joi.number().greater(-1);
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

  companyStreet: {
    companyStreet: stringWithNumbers,
  },
  companyCity: {
    City: basicString,
  },
  companyCounty: {
    County: basicString,
  },
  companyCountry: {
    Country: basicString,
  },
  companyPostcode: {
    postcode: stringWithNumbers,
  },
  City: {
    City: basicString,
  },
  County: {
    County: basicString,
  },
  Country: {
    Country: basicString,
  },
  postcode: {
    postcode: stringWithNumbers,
  },
  invoiceCompanyName: {
    invoiceCompanyName: basicString, //refactor these to be companyCase
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
    price: greaterThanZero,
  },
  tax: {
    tax: greaterThanMinus,
  },
  sku: {
    sku: stringWithNumbers,
  },
  intake: {
    intake: greaterThanMinus,
  },
};

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
const mustBeInt = Joi.number().integer().greater(-1);

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
    companyCity: basicString,
  },
  companyCounty: {
    companyCounty: basicString,
  },
  companyCountry: {
    companyCountry: basicString,
  },
  companyPostcode: {
    companyPostcode: stringWithNumbers,
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
  qty: {
    qty: mustBeInt,
  },
  editQty: {
    editQty: mustBeInt,
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
};

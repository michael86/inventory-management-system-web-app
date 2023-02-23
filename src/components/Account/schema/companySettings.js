const classes = {
  group: ["mb-3"],
};

export const accountSchema = [
  {
    controlId: "email",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Email:",
    type: "email",
    placeholder: "Email",

    formText: "We'll never share your email with anyone else.",
  },

  {
    controlId: "password",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Password:",
    type: "password",
    placeholder: "Password",

    custError:
      "Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and be between 8 - 25 chars",
  },
];

export const companySchema = [
  {
    controlId: "company",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Company Name:",
    type: "text",
    placeholder: "Company Name",
    custError: "Company name can't contain numbers or special characters",
  },
  {
    controlId: "companyStreet",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Address:",
    type: "text",
    placeholder: "Address",
    custError: "Company address can't contain special characters",
  },
  {
    controlId: "companyCity",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "City:",
    type: "text",
    placeholder: "City",
    custError: "City name can't contain numbers or special characters",
  },
  {
    controlId: "companyCounty",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "county:",
    type: "text",
    placeholder: "County",
    custError: "County can't contain numbers or special characters",
  },
  {
    controlId: "companyPostcode",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Postcode:",
    type: "text",
    placeholder: "Post Code",
    custError: "Post Code can't contain special characters",
  },
];

const classes = {
  group: ["mb-3"],
};

export const personal = [
  {
    controlId: "email",
    classNames: {
      group: classes.group,
    },
    label: "Email:",
    type: "email",
    placeholder: "Email",
    required: true,
    formText: "We'll never share your email with anyone else.",
  },

  {
    controlId: "password",
    classNames: {
      group: classes.group,
    },
    label: "Password:",
    type: "password",
    placeholder: "Password",
    required: true,
    custError:
      "Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and be between 8 - 25 chars",
  },
  {
    controlId: "name",
    classNames: {
      group: classes.group,
    },
    label: "Name:",
    type: "text",
    placeholder: "Full Name",
    required: true,
    custError:
      "Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and be between 8 - 25 chars",
  },
];

export const company = [
  {
    controlId: "company",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "Company Name:",
    type: "text",
    placeholder: "Company Name",
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
    custError: "County can't contain numbers or special characters",
  },
  {
    controlId: "companyCountry",
    classNames: {
      group: classes.group,
      //   label: classes.label,
    },
    label: "country:",
    type: "text",
    placeholder: "Country",
    required: true,
    custError: "Country can't contain numbers or special characters",
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
    required: true,
    custError: "Post Code can't contain special characters",
  },
];

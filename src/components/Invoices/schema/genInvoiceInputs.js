const classes = {
  group: ["d-flex", "flex-column", "flex-lg-row", "mb-2"],
  label: ["me-2", "mb-0"],
};

export const toCompany = [
  {
    controlId: "companyName",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Company Name:",
    type: "text",
    placeholder: "Company Name",
    required: true,
  },
  {
    controlId: "contactName",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Name:",
    type: "text",
    placeholder: "Name",
    required: true,
  },
  {
    controlId: "companyAddress",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Address:",
    type: "text",
    placeholder: "Address",
    required: true,
  },
  {
    controlId: "companyCity",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "City:",
    type: "text",
    placeholder: "City",
    required: true,
  },
  {
    controlId: "companyState",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "State:",
    type: "text",
    placeholder: "State",
    required: true,
  },
  {
    controlId: "companyCountry",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Country:",
    type: "text",
    placeholder: "Country",
    required: true,
  },
  {
    controlId: "companyPostcode",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Postcode:",
    type: "text",
    placeholder: "Postcode",
    required: true,
  },
];

export const item = [
  {
    controlId: "item",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Item:",
    type: "text",
    placeholder: "Item",
  },
  {
    controlId: "description",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Description:",
    type: "text",
    placeholder: "Description",
  },
  {
    controlId: "quantity",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Quantity:",
    type: "number",
    placeholder: "Quantity",
  },
  {
    controlId: "price",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Price:",
    type: "number",
    placeholder: "Price",
  },
  {
    controlId: "tax",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Tax:",
    type: "number",
    placeholder: "%0",
  },
];

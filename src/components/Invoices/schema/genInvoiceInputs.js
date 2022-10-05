const classes = {
  group: ["d-flex", "flex-column", "flex-lg-row", "mb-2"],
  label: ["me-2", "mb-0"],
};

export const toCompany = [
  {
    controlId: "company-name",
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
    controlId: "name",
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
    controlId: "address",
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
    controlId: "city",
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
    controlId: "state",
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
    controlId: "country",
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
    controlId: "postcode",
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
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
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
    required: true,
  },
];

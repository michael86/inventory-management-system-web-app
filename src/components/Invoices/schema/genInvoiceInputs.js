const classes = {
  group: ["d-flex", "flex-column", "flex-lg-row", "mb-2", "flex-wrap"],
  label: ["me-2", "mb-0"],
};

export const toCompany = [
  {
    controlId: "invoiceCompanyName",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Company Name:",
    type: "text",
    placeholder: "Company Name",
    required: true,
    custError: "Company Name can not contain numbers or special characters",
  },
  {
    controlId: "invoiceContactName",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Name:",
    type: "text",
    placeholder: "Name",
    required: true,
    custError: "Contact Name can not contain numbers or special characters",
  },
  {
    controlId: "invoiceCompanyAddress",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Address:",
    type: "text",
    placeholder: "Address",
    required: true,
    custError: "Company Address can not contain special characters",
  },
  {
    controlId: "invoiceCompanyCity",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "City:",
    type: "text",
    placeholder: "City",
    required: true,
    custError: "Company City can not contain numbers or special characters",
  },
  {
    controlId: "invoiceCompanyState",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "State:",
    type: "text",
    placeholder: "State",
    required: true,
    custError: "Company State can not contain numbers or special characters",
  },
  {
    controlId: "invoiceCompanyCountry",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Country:",
    type: "text",
    placeholder: "Country",
    required: true,
    custError: "Company Country can not contain numbers or special characters",
  },
  {
    controlId: "invoiceCompanyPostcode",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Postcode:",
    type: "text",
    placeholder: "Postcode",
    required: true,
    custError: "Company post code can not contain special characters",
  },
];

export const specifics = [
  {
    controlId: "billingDate",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Billing Date:",
    type: "date",
    placeholder: "Billing Date",
    required: true,
  },
  {
    controlId: "dueDate",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Due Date:",
    type: "date",
    placeholder: "Due Date",
    required: true,
  },
  {
    controlId: "orderNumber",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Order #:",
    type: "text",
    placeholder: "Order #",
    required: true,
  },
  {
    controlId: "footer",
    classNames: {
      group: classes.group,
      label: classes.label,
    },
    label: "Notes:",
    type: "text",
    placeholder: "footer",
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
    min: 0,
    placeholder: "Quantity",
    custError: "Qty can not be less than 0 and must be a whole number",
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
    step: 0.01,
    min: 0,
    custError: "Price can not be less than 0",
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
    min: 0,
    custError: "Tax can not be less than 0",
  },
];

const classes = {
  group: ["mb-3"],
};

export const inputs = [
  {
    controlId: "contact-email",
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
    controlId: "name",
    classNames: {
      group: classes.group,
    },
    label: "Name:",
    type: "text",
    placeholder: "Name",
    required: true,
    custError: "Name can't contain special characters or numbers",
  },
];

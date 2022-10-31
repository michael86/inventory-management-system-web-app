export const onSaveSettings = (formData, user) => {
  user.darkMode =
    formData.darkMode && formData.darkMode === "on" ? true : false;

  Object.keys(formData).forEach((entry) => {
    user[entry] = formData[entry].length > 0 ? formData[entry] : user[entry];
  });

  return user;
};

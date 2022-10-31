export const onSaveSettings = (formData, user, cb) => {
  console.log("formData", formData);

  Object.keys(formData).forEach((entry) => {
    user[entry] = formData[entry].length > 0 ? formData[entry] : user[entry];
  });

  user.darkMode = formData.darkMode ? true : false; //This is being set back to false when company settings are submitted

  cb && cb();
  return user;
};

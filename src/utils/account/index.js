export const onSaveSettings = (formData, user, cb) => {
  Object.keys(formData).forEach((entry) => {
    user[entry] = formData[entry].length > 0 ? formData[entry] : user[entry];
  });

  user.darkMode =
    typeof formData.darkMode === "boolean" ? formData.darkMode : user.darkMode;

  cb && cb();
  return user;
};

export const setStore = (payload) => {
  const { key, data } = payload;
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStore = (payload) =>
  JSON.parse(localStorage.getItem(payload.key));

export const toggleStoreLogout = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  data.authenticated = !data.authenticated;
  setStore(JSON.stringify(data));
};

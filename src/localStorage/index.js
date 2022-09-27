export const setStore = (payload) => {
  const { key, data } = payload;
  localStorage.setItem(key, JSON.stringify(data));
};

export const setStoreLogout = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  data.authenticated = false;
  setStore(data);
};

export const getStore = (payload) =>
  JSON.parse(localStorage.getItem(payload.key));

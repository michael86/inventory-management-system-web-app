export const setStore = (payload) => {
  const data = JSON.stringify(payload);
  localStorage.setItem("data", data);
};

export const setStoreLogout = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  data.authenticated = false;
  setStore(data);
};

export const getStore = () => JSON.parse(localStorage.getItem("data"));

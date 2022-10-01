export const setStore = (payload) => {
  const { key, data } = payload;
  localStorage.setItem(key, JSON.stringify(data));
};

export const updateStore = (payload) => {
  const { key, data } = payload;
  const localState = getStore(key);
  Object.keys(data).forEach((key) => (localState[key] = data[key]));
  setStore({ key, data: localState });
};

export const getStore = (payload) => JSON.parse(localStorage.getItem(payload));

export const toggleUserAuth = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  data.authenticated = !data.authenticated;
  setStore(JSON.stringify(data));
};

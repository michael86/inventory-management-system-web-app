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

export const getStore = (payload) => {
  const data = localStorage.getItem(payload);
  return data ? JSON.parse(data) : undefined;
};

export const deleteStore = (payload) => window.localStorage.removeItem(payload);

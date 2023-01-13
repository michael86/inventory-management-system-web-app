axios.interceptors.request.use(
  (config) => {
    config.headers["token"] = getStore("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

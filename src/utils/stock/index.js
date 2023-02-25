export const genStockData = (data, locations) => {
  delete data["location-name"]; //clean up inputs not required
  delete data["location-value"];

  data.locations = locations;
  data.history = [
    {
      qty: data.qty,
      price: data.price,
      locations: data.locations,
    },
  ];

  return data;
};

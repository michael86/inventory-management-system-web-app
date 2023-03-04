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

export const penniesToPounds = (pennies) => (pennies / 100).toFixed(2);

export const deleteLocation = (id, locations) => {
  const copy = [...locations];
  const index = copy.findIndex((location) => location.id === id);

  if (index === -1) return locations;

  copy.splice(index, 1);
  return copy;
};

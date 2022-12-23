export const generateLabels = (obj) => {
  const labels = [];
  for (const year in obj) obj[year].forEach((month) => labels.push(month));
  return labels;
};

export const generateDataset = (months, data) => {
  console.log(months);
  console.log(data);
};

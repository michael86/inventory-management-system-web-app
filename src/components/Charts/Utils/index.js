export const generateLabels = (obj, addYear = false) => {
  const labels = [];
  for (const year in obj)
    obj[year].forEach((month) =>
      addYear ? labels.push(`${month} - ${year}`) : labels.push(month)
    );
  return labels;
};

export const generateDataset = (months, data) => {
  console.log(months);
  console.log(data);
};

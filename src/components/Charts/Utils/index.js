export const generateLabels = (obj) => {
  const labels = [];
  for (const year in obj) obj[year].forEach((month) => labels.push(month));
  return labels;
};

export const generateDataset = (months, data) => {
  //   console.log(months);
  //   console.log(data);
  // datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
};

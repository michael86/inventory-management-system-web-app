import { v4 as uuidv4 } from "uuid";

export const generateLabels = (obj, addYear = false) => {
  const labels = [];
  for (const year in obj)
    obj[year].forEach((month) =>
      addYear ? labels.push(`${month} - ${year}`) : labels.push(month)
    );
  return labels;
};

export const generateDataset = (
  dateObject,
  useageMonths,
  minMax,
  searchFilter
) => {
  //dalliance
  //pangolins
  const generateFromFilter = () => {
    const dataset = [
      {
        id: uuidv4(),
        label: searchFilter,
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ];
    Object.keys(useageMonths).forEach((year) => {
      useageMonths[year].forEach((month) => {
        dataset[0].data.push(
          dateObject[year][month][searchFilter]
            ? dateObject[year][month][searchFilter].runningTotal
            : 0
        );
      });
    });

    return dataset;
  };

  const generateFromMinMax = () => {
    return [1];
  };

  return searchFilter ? generateFromFilter() : generateFromMinMax();
};

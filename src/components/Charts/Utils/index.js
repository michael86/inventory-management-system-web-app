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
  console.log(dateObject);
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
    Object.keys(useageMonths).forEach((year, yearIndex) => {
      useageMonths[year].forEach((month, index) => {
        dataset[0].data.push(
          dateObject[year][month][searchFilter]
            ? dateObject[year][month][searchFilter].runningTotal
            : 0
        );
      });
    });

    console.log("dataset", dataset);

    return dataset;
  };

  const generateFromMinMax = () => {
    console.log("from min");
    return [1];
  };

  return searchFilter ? generateFromFilter() : generateFromMinMax();
};

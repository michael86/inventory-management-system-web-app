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
  console.log("searchFilter", searchFilter);
  //dalliance
  //pangolins
  const generateFromFilter = () => {
    const dataset = [];

    const skus = [];

    if (!Object.keys(dateObject).length) return; //Sku not found

    //Filter out the sku labels
    Object.keys(useageMonths).forEach((year) => {
      useageMonths[year].forEach((month) => {
        console.log("dateObject", dateObject);
        console.log("dateObject[year]", dateObject[year]);
        console.log("dateObject[year][month]", dateObject[year][month]);

        Object.keys(dateObject[year][month]).forEach((sku) => {
          !skus.includes(sku) && skus.push(sku);
        });
      });
    });

    skus.forEach((sku) => {
      const skuObject = {
        id: uuidv4(),
        label: sku,
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };

      //Iterate object year
      Object.keys(useageMonths).forEach((year) => {
        // iterate object month
        useageMonths[year].forEach((month) => {
          //iterate object sku
          Object.keys(dateObject[year][month]).forEach(() => {
            //If this sku is valid, push the running total, else 0.
            skuObject.data.push(
              dateObject[year][month][sku]
                ? dateObject[year][month][sku].runningTotal
                : 0
            );
            console.log("skuObject", skuObject);
          });
        });
      });

      dataset.push(skuObject);
    });

    console.log("yeet", dataset);

    return dataset;
  };

  const generateFromMinMax = () => {
    console.log("from min");
    return [1];
  };

  return searchFilter ? generateFromFilter() : generateFromMinMax();
};

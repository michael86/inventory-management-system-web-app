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
    const dataset = [];

    const skus = [];

    if (!Object.keys(dateObject).length) return; //Sku not found

    //Filter out the sku labels
    Object.keys(useageMonths).forEach((year) => {
      useageMonths[year].forEach((month) => {
        dateObject[year] &&
          dateObject[year][month] &&
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

      /* 
        Hi whoever checks this... This drove me insane for a good hour. So let me explain why I'm having to do this... 
        Due to the way chartJS expects the array and the way I've generated the dateObject. If the user clicks on a month that overlaps the 6month period with the date it was entered into the system. 
        Then the useageMonths will contain months where the item didn't exist. In turn causing an indexing issue with the dateObject. So, we can safely assume, IF the dateObject doesn't contain the current year/month, 
        it wasn't entered into the system. This means, we can safely enter the value 0 for the months it didn't exists, and force the month it did exists into the correct index. 
      */
      Object.keys(useageMonths).forEach((year) => {
        useageMonths[year].forEach((month) => {
          dateObject[year] && dateObject[year][month]
            ? Object.keys(dateObject[year][month]).forEach(() => {
                //If this sku is valid, push the running total, else 0.
                skuObject.data.push(
                  dateObject[year][month][sku]
                    ? dateObject[year][month][sku].runningTotal
                    : 0
                );
              })
            : skuObject.data.push(0);
        });
      });

      dataset.push(skuObject);
    });

    return dataset;
  };

  const generateFromMinMax = () => {
    return [1];
  };

  return searchFilter ? generateFromFilter() : generateFromMinMax();
};

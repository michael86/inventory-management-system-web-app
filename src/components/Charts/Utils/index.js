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
  return [];
  //First collect all skus for target year/month
  //if serachFilter, filter out the junk
  //For each previous year/month check if there.
  //if not set to 0 else set to target

  // console.log(useageMonths);
  // const generateFromFilter = () => {
  //   const dataset = [];
  //   const skus = [];
  //   if (!Object.keys(dateObject).length) return; //Sku not found
  //   //Filter out the sku labels
  //   Object.keys(useageMonths).forEach((year) => {
  //     useageMonths[year].forEach((month) => {
  //       dateObject[year] &&
  //         dateObject[year][month] &&
  //         Object.keys(dateObject[year][month]).forEach((sku) => {
  //           !skus.includes(sku) && skus.push(sku);
  //         });
  //     });
  //   });
  //   skus.forEach((sku) => {
  //     const skuObject = {
  //       id: uuidv4(),
  //       label: sku,
  //       data: [],
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     };
  //     /*
  //       Hi whoever checks this... This drove me insane for a good hour. So let me explain why I'm having to do this...
  //       Due to the way chartJS expects the array and the way I've generated the dateObject. If the user clicks on a month that overlaps the 6month period with the date it was entered into the system.
  //       Then the useageMonths will contain months where the item didn't exist. In turn causing an indexing issue with the dateObject. So, we can safely assume, IF the dateObject doesn't contain the current year/month,
  //       it wasn't entered into the system. This means, we can safely enter the value 0 for the months it didn't exists, and force the month it did exists into the correct index.
  //     */
  //     Object.keys(useageMonths).forEach((year) => {
  //       useageMonths[year].forEach((month) => {
  //         dateObject[year] && dateObject[year][month]
  //           ? Object.keys(dateObject[year][month]).forEach(() => {
  //               //If this sku is valid, push the running total, else 0.
  //               skuObject.data.push(
  //                 dateObject[year][month][sku]
  //                   ? dateObject[year][month][sku].runningTotal
  //                   : 0
  //               );
  //             })
  //           : skuObject.data.push(0);
  //       });
  //     });
  //     dataset.push(skuObject);
  //   });
  //   return dataset;
  // };
  // const generateFromMinMax = () => {
  //   /*
  //     get last year/month required, as this is used to figured out what year/month is selected in parent state
  //     sort by minMax
  //     generate dataset
  //   */
  //   const dataset = [];
  //   let currentSkus = [];
  //   let targetYear = Object.keys(useageMonths);
  //   targetYear = targetYear[targetYear.length - 1];
  //   let targetMonth = useageMonths[targetYear];
  //   targetMonth = targetMonth[targetMonth.length - 1];
  //   //If we don't have the target timeframe then return as something is broken.
  //   //In theory, this should never happen.
  //   if (!dateObject[targetYear] && ![dateObject[targetYear][targetMonth]])
  //     return [];
  //   //Generate array full of skus that were in the system for the target month and year
  //   Object.keys(dateObject[targetYear][targetMonth]).forEach((sku) => {
  //     currentSkus.push({
  //       sku,
  //       runningTotal: dateObject[targetYear][targetMonth][sku].runningTotal,
  //       history: sku.history,
  //     });
  //   });
  //   //Filter our new array based on min/max value and then slice of the highest/lowest 5
  //   currentSkus = currentSkus
  //     .sort((a, b) => (minMax ? a[1] - b[1] : b[1] - a[1]))
  //     .slice(0, 5);
  //   //Generate the dataset structure for chartJs, leave data empty so we can just append to it.
  //   const skuDatasetObject = {};
  //   currentSkus.forEach((sku) => {
  //     console.log("sku[0]", sku);
  //     skuDatasetObject[sku[0]] = {
  //       id: uuidv4(),
  //       label: sku[0],
  //       data: [],
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     };
  //   });
  //   //At this point, we now have the skus with the highest/lowest count for the target time frame.
  //   //We also have our chartJs dataset structure set up.
  //   //We now need to iterate over each sku, sort it's history into highest/lowest and push it to out dataset
  //   currentSkus.forEach((sku) => {
  //     //Sort out the history here
  //   });
  //   // Object.keys(useageMonths).forEach((year) => {
  //   //   useageMonths[year].forEach((month) => {
  //   //     dateObject[year] &&
  //   //       Object.keys(dateObject[year][month]).forEach((sku) => {
  //   //         currentSkus.forEach((filteredSku) => {
  //   //           if (filteredSku.includes(sku)) {
  //   //             skuDatasetObject[sku].data.push(
  //   //               dateObject[year] &&
  //   //                 dateObject[year][month] &&
  //   //                 dateObject[year][month][sku] &&
  //   //                 dateObject[year][month][sku].runningTotal
  //   //                 ? dateObject[year][month][sku].runningTotal
  //   //                 : 0
  //   //             );
  //   //           }
  //   //         });
  //   //       });
  //   //   });
  //   // });
  //   Object.keys(skuDatasetObject).forEach((sku) => {
  //     dataset.push(skuDatasetObject[sku]);
  //   });
  //   console.log(dataset);
  //   return dataset;
  // };
  // return searchFilter ? generateFromFilter() : generateFromMinMax();
};

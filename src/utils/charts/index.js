import { isTypeQueryNode } from "typescript";
import { v4 as uuidv4 } from "uuid";

export const generateLabels = (obj, addYear = false) => {
  const labels = [];
  for (const year in obj)
    obj[year].forEach((month) =>
      addYear ? labels.push(`${month} - ${year}`) : labels.push(month)
    );
  return labels;
};

export const generateDataset = (dateObject, useageMonths, minMax, searchFilter) => {
  /**
   * @param {object} targetMonth => {year: [month, month], year: [month, month]}
   * @param {object} dateObject => {year: {month: {sku: {runningTotal, price}, sku{repeat}}}}
   * @param {int} minMax => used as a booolean to filter by highest or lowest totals
   * @param {string || null} => used to filter for skus containing filter

   * @returns {Array} => [{id: uuidv4(), label: sku name, data: [number, number, number], backgroundColor: "rgba(255, 99, 132, 0.5)",}]

   * collect skus for target months/years
   * filter by searchFilter
   * sort by min max
   * returning in graph dataset format
  */

  /**Will iterate over the target time period and return a new object containing all skus within that time period
   * @return {object} -> Same format as dateObject.
   */
  const getTargetSkus = () => {
    const data = {};
    Object.keys(useageMonths).forEach((year) => {
      useageMonths[year].forEach((month) => {
        data[year] = data[year] || {};
        data[year][month] = dateObject[year][month];
      });
    });
    return data;
  };

  /**If a search filter is passed, then iterate over the object and remove any skus that don't contain the filter. */
  const filterSkus = (payload) => {
    const data = {};

    Object.keys(payload).forEach((year) => {
      Object.keys(payload[year]).forEach((month) => {
        const skus = Object.keys(payload[year][month]);

        for (const sku of skus)
          if (sku.toLowerCase().includes(searchFilter.toLowerCase())) {
            data[year] = data[year] || {};
            data[year][month] = data[year][month] || {};
            data[year][month][sku] = payload[year][month][sku];
          }
      });
    });

    return data;
  };

  let targetSkus = getTargetSkus();

  targetSkus = searchFilter ? filterSkus(targetSkus) : targetSkus;

  return [];
};

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
  /**
   * @param {object} useageMonths => {year: [month, month], year: [month, month]}
   * @param {object} dateObject => {year: {month: {sku: {runningTotal, price}, sku{repeat}}}}
   * @param {int} minMax => used as a boolean to filter by ascending or descending totals. 1 = lowest, 0 = highest
   * @param {string || null} => used to filter for skus containing filter

   * @returns {Array} => [{id: uuidv4(), label: sku name, data: [number, number, number], backgroundColor: "rgba(255, 99, 132, 0.5)",}]

   * collect skus for target months/years
   * filter by searchFilter
   * sort by min max
   * returning in graph dataset format
  */

  //Get the currently selected year, and month so we can select what data to sort by min and max
  const selectedYear =
    Object.keys(useageMonths)[Object.keys(useageMonths).length - 1];
  const selectedMonth =
    useageMonths[selectedYear][useageMonths[selectedYear].length - 1];

  /**Will iterate over the target time period and return a new object containing all skus within that time period
   * If a point in time didn't exist for a given month/year, it will set it to null. We can then truthy/falsy when generating the dataset and insert 0 where index is null
   * @return {object} -> Same format as dateObject.
   */
  const getTargetSkus = () => {
    const data = {};
    Object.keys(useageMonths).forEach((year) => {
      useageMonths[year].forEach((month) => {
        data[year] = data[year] || {};
        data[year][month] = dateObject[year]
          ? dateObject[year][month]
            ? dateObject[year][month]
            : null
          : null;
      });
    });
    return data;
  };

  /**If a search filter is passed, then iterate over the object and remove any skus that don't contain the filter. */
  const filterSkus = (payload) => {
    const data = {};

    Object.keys(payload).forEach((year) => {
      Object.keys(payload[year]).forEach((month) => {
        const skus =
          payload[year] &&
          payload[year][month] &&
          Object.keys(payload[year][month]);

        if (skus) {
          for (const sku of skus)
            if (sku.toLowerCase().includes(searchFilter.toLowerCase())) {
              data[year] = data[year] || {};
              data[year][month] = data[year][month] || {};
              data[year][month][sku] = payload[year][month][sku];
            }
        } else {
          data[year] = data[year] || {};
          data[year][month] = null;
        }
      });
    });

    return data;
  };

  /**Sorts the data and returns the highest or lowest 6 skus */
  const getSkusAscending = (payload) => {
    let data = [];

    for (const sku in payload[selectedYear][selectedMonth])
      data.push([sku, payload[selectedYear][selectedMonth][sku].runningTotal]);

    data = data.sort((a, b) => a[1] - b[1]);

    data = data.map((entry) => entry[0]);

    return minMax ? data.slice(0, 5) : data.slice(data.length - 6);
  };

  /** Will generate the final array for chartJs
   * @param {array} => contains a list of skus we require
   * @returns {array -> object} - Each entry will contain the required object format for js
   */
  const generateFinalObject = (skus, payload) => {
    const dataset = [];
    skus.forEach((sku) => {
      const data = {
        label: sku,
        data: [],
      };

      Object.keys(payload).forEach((year) => {
        Object.keys(payload[year]).forEach((month) => {
          if (
            !Object.is(payload[year][month], null) &&
            payload[year][month][sku]
          )
            data.data.push({
              runningTotal: payload[year][month][sku].runningTotal,
              price: payload[year][month][sku].runningTotal,
              year,
              month,
            });
          else
            data.data.push({
              runningTotal: 0,
              price: 0,
              year,
              month,
            });
        });
      });

      dataset.push(data);
    });

    return dataset;
  };

  let targetObj = getTargetSkus();

  targetObj = searchFilter ? filterSkus(targetObj) : targetObj;

  return generateFinalObject(getSkusAscending(targetObj), targetObj);
};

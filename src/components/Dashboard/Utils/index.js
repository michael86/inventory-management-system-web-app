//Local functions
const date = new Date();
const currentMonth = date.getMonth();

const genLastHalfYear = (month = currentMonth) => {
  const months = [];

  for (let i = month; i >= month - 6; i--) {
    months.push(i);
  }

  return months.sort((a, b) => a - b);
};

//Begin exports

const currentYear = date.getFullYear();
const timeSchema = {};
timeSchema[currentYear] = genLastHalfYear();

export const getHighestCount = (
  dateObject,
  timeSpan = timeSchema,
  amount = 5
) => {
  /**
   * @arg dateObject is a deep nested object, structed by: year -> month -> sku -> Props for this sku
   * @arg timeSpan is an array containing target months/years
   * Iterate over the timeSpan Object, where each index should
   * reflect the same layout as the date object keys. This should then allow us to iterate over the retval
   * to create the datasets and labels.
   **/

  const retval = {};
  for (const year in timeSpan) {
    timeSpan[year].forEach((month) => {
      for (const sku in dateObject[year][month]) {
        retval[month] = retval[month] || {};
        retval[month][sku] = dateObject[year][month][sku];
      }
    });
  }
};

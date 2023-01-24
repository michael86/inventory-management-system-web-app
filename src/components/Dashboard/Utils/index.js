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

export const createDateObject = (obj, filter) => {
  const dateObject = {};
  //Destructure unix into month and year ints
  const breakUpDate = (date) => {
    const d = date ? new Date(date) : new Date();
    const month = d.getMonth();
    const year = d.getFullYear();
    return [month, year];
  };

  const [currentMonth, currentYear] = breakUpDate();

  for (const item of obj) {
    /**To start with, we sort the item history by date ascending.
     * We then start from the first point in history, which is the date created.
     * This means if the item is not at a point in the past, it wasn't added to the store yet.
     */

    if (filter && !item.sku.toLowerCase().includes(filter.toLowerCase()))
      continue;

    item.history.sort((a, b) => a.date - b.date);

    let [monthCounter, yearCounter] = breakUpDate(item.dateCreated);

    let lastSnapshot; //Cache the last valid month and year combo into the snapshot. This allows us to reference it without having to iterate over the history again.

    while (yearCounter <= currentYear) {
      if (yearCounter === currentYear && monthCounter > currentMonth) {
        //Soon as we increment past this point in time, continue. This prevents the time object from going into the futuree of the current month
        monthCounter++;
        if (monthCounter > 11) {
          yearCounter++;
          monthCounter = 0;
        }
        continue;
      }

      dateObject[yearCounter] = dateObject[yearCounter] || {};

      dateObject[yearCounter][monthCounter] =
        dateObject[yearCounter][monthCounter] || {};

      // ..... Shut up lint
      // eslint-disable-next-line
      item.history.forEach((history) => {
        const [historyMonth, historyYear] = breakUpDate(history.date);
        //something here broken
        if (historyMonth === monthCounter && historyYear === yearCounter) {
          dateObject[yearCounter][monthCounter][item.sku] = {
            runningTotal: history.qty,
            price: history.price,
          };

          lastSnapshot = dateObject[yearCounter][monthCounter][item.sku];
        } else {
          dateObject[yearCounter][monthCounter][item.sku] = lastSnapshot;
        }
      });

      monthCounter++;
      if (monthCounter > 11) {
        yearCounter++;
        monthCounter = 0;
      }
    }
  }

  return dateObject;
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

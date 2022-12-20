/*new layout for date object 
2022 {
  0 {
    sku {
      running total: 
      price: 

    }
  }
}


*/

export const createDateObject = (obj) => {
  const dateObject = {};

  const breakUpDate = (date) => {
    const d = date ? new Date(date * 1000) : new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return [day, month, year];
  };

  //Iterate over each item, UID = item.sku
  obj.forEach((item) => {
    const [dateCreated, monthCreated, yearCreated] = breakUpDate(
      item.dateCreated
    );

    const [currentDate, currentMonth, currentYear] = breakUpDate();

    item.history?.sort((a, b) => a.date - b.date); //If history, sort by date

    //Create our entry points
    dateObject[yearCreated] = dateObject[yearCreated] || {};

    dateObject[yearCreated][monthCreated] =
      dateObject[yearCreated][monthCreated] || {};

    let price, runningTotal;

    //Check history to see if we have one for this month in time.

    /**Michael, no doubt you'll forget what you're thinkging when returning...
     * You plan to iterate from the date created, and keep adding a month or year until you're at the present month/year (currentMonth, currentYear).
     * Filling in each gap as you go. If there's not a current month and year contained in the history, check the past as we can assume the last snapshot reflects its current state.!
     * 
     
     **/
    item.history?.forEach((history) => {
      const [historyDate, historyMonth, historyYear] = breakUpDate(
        history.date
      );

      console.log(historyDate, historyMonth, historyYear);
    });
  });

  return dateObject;
};

export const genItemDataSet = (data) => {
  let obj = {}; //Object containing the month (int) as key and values that month stock []
  const date = new Date();
  const curMonth = date.getMonth();

  if (data.history) {
    data.history.sort((a, b) => a.date - b.date); //Sort history by date. This in essence allows us to use the index alongside the the month array in sync
    data.history.forEach((his) => {
      const date = new Date(his.date); // generate 2d array and push month stock to relevant child []
      const month = date.getMonth();
      obj[month] ? obj[month].push(his.qty) : (obj[month] = [his.qty]);
    });
  }
  obj[curMonth] ? obj[curMonth].push(data.qty) : (obj[curMonth] = [data.qty]); //push the latest stock to current month
  for (const i in obj) {
    obj[i] = obj[i].reduce((accumulator, value) => accumulator + value, 0);
  }
  obj = Object.values(obj); //turn obj to array
  obj = obj.slice(obj.length - 6); // slice of the last 6 months
  return obj;
};

export const genChartObject = (data) => {
  return data.map((item) => {
    return {
      label: item.sku,
      data: genItemDataSet(item),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    };
  });
};

const date = new Date();
const currentMonth = date.getMonth();

const genLastHalfYear = (month = currentMonth) => {
  const months = [];

  for (let i = month; i >= month - 6; i--) {
    months.push(i);
  }

  return months.sort((a, b) => a - b);
};

/*
  Not sure why, but if we do 
  timeSchema = {currentYear: genLastHalfYear()}
  we get {currentYear: [1,2,3,4,5,6]}
  instead of {2022: [1,2,3,4,5,6]}
*/
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

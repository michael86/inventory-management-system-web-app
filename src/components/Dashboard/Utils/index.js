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

  //Iterate over each item, UID = item.sku
  obj.forEach((item) => {
    //sort history here
    console.log("item", item);

    item.history?.forEach((history) => {
      //Begin adding our history to the object
      const date = new Date(history.date * 1000);
      const year = date.getFullYear();
      const month = date.getMonth();

      dateObject[year] = dateObject[year] || {};

      dateObject[year][month] = dateObject[year][month] || {};

      dateObject[year][month][item.sku] =
        dateObject[year][month][item.sku] || {};

      dateObject[year][month][item.sku].runningTotal = 1000;

      dateObject[year][month][item.sku].price = 1000;
    });

    //Here we need to check if sku is in every history! We can do this by checking dateCreated against that year/month
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    /// Just incase this year || month didn't have an history
    dateObject[currentYear] = dateObject[currentYear] || {};
    dateObject[currentYear][currentMonth] =
      dateObject[currentYear][currentMonth] || {};
    dateObject[currentYear][currentMonth][item.sku] =
      dateObject[currentYear][currentMonth][item.sku] || {};

    dateObject[currentYear][currentMonth][item.sku].runningTotal = 9999;
    dateObject[currentYear][currentMonth][item.sku].price = 9999;
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
  console.log("dateObject", dateObject);
  const retval = {};
  for (const year in timeSpan) {
    timeSpan[year].forEach((month) => {
      for (const sku in dateObject[year][month]) {
        retval[month] = retval[month] || {};
        retval[month][sku] = dateObject[year][month][sku];
      }
    });
  }

  console.log("retval", retval);
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const date = new Date();

export const getDay = (readable) =>
  readable ? dayNames[date.getDay()] : date.getDay();

export const getMonth = (readable) =>
  readable ? monthNames[date.getMonth()] : date.getMonth();

export const getYear = () => date.getFullYear();

export const getHalfMonths = (startMonth = getMonth(), year = getYear()) => {
  //Needs to return an object with the years as keys as sort() will put the previous year months at the end
  const months = {};
  startMonth = startMonth - 5;
  if (startMonth < 0) {
    startMonth = 11 + (startMonth + 1); // puky math. We are basically adding a negative number to 11 to ultimately subtract into the previous year. The + 1 is due to js counting months from 0
    year--;
  }

  for (let i = 0; i < 6; i++) {
    months[year] = months[year] || [];

    months[year].push(startMonth);

    startMonth++;

    //We're now going into the future
    if (startMonth > 11) {
      year++;
      startMonth = 0;
    }
  }

  return months;
};

export const makeMonthReadable = (month) => monthNames[month];

export const makeReadable = (obj, includeYears = false) => {
  for (const year in obj) {
    obj[year].forEach(
      (month, index) =>
        (obj[year][index] = includeYears
          ? `${monthNames[month]} - ${year} `
          : monthNames[month])
    );
  }

  console.log(obj);
  return obj;
};

export const createDateObject = (obj) => {
  const dateObject = {};

  //Destructure unix into month and year ints
  const breakUpDate = (date) => {
    const d = date ? new Date(date) : new Date();
    const month = d.getMonth();
    const year = d.getFullYear();
    return [month, year];
  };

  const [currentMonth, currentYear] = breakUpDate(); //Used to ensure we eventually break out of the while loop when we are in the present

  obj.forEach((item) => {
    /**To start with, we sort the item history by date ascending.
     * We then start from the first point in history, which is the date created.
     * This means if the item is not at a point in the past, it wasn't added to the store yet.
     */

    item.history.sort((a, b) => a.date - b.date);

    let [monthCounter, yearCounter] = breakUpDate(item.dateCreated * 1000);

    let lastSnapshot; //Cache the last valid month and year combo into the snapshot. This allows us to reference it without having to iterate over the history again.

    while (monthCounter <= currentMonth && yearCounter <= currentYear) {
      dateObject[yearCounter] = dateObject[yearCounter] || {};

      dateObject[yearCounter][monthCounter] =
        dateObject[yearCounter][monthCounter] || {};

      // ..... Shut up lint
      // eslint-disable-next-line
      item.history.forEach((history) => {
        const [historyMonth, historyYear] = breakUpDate(history.date * 1000);

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
  });

  return dateObject;
};

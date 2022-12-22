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

export const getYear = () => monthNames[date.getYear()];

export const getHalfMonths = (startMonth = getMonth(), readable = true) => {
  //Needs to return an object with the years as keys as sort() will put the previous year months at the end
  const months = [];
  let lastMonth = startMonth - 4;
  if (lastMonth < 0) startMonth = 11 + (startMonth - 4); // puky math. We are basically adding a negative number to 11 to ultimately subtract into the previous year

  for (let i = 0; i < 6; i++) {
    months.push(readable ? monthNames[startMonth] : startMonth);
    startMonth++;
    if (startMonth > 11) startMonth = 0;
  }

  return months;
};

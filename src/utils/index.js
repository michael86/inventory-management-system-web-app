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

export const getHalfMonths = (readable) => {
  const months = [];
  const currMonth = getMonth();

  const lastMonth = currMonth - 5;

  for (let i = currMonth; i >= lastMonth; i--) {
    if (i < 0) break;
    readable ? months.push(monthNames[i]) : months.push(i);
  }

  return months;
};

import { getStore } from "../localStorage";
import axios from "axios";

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

export const makeReadable = (obj) => {
  for (const year in obj) {
    obj[year].forEach((month, index) => (obj[year][index] = monthNames[month]));
  }
  return obj;
};

export const isAuthenticated = async () => {
  const token = getStore("token");

  const headers = {
    token,
  };

  const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth`, {
    headers,
  });
  if (res.status !== 200) {
    console.log(res);
    return;
  }

  return res.data.status > -1 ? true : false;
};

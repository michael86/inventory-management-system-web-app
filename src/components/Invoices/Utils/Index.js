// export const filterByDate

export const sortAscending = (payload) =>
  [...payload].sort((a, b) => a.date_generated - b.date_generated);

export const sortDescending = (payload) =>
  [...payload].sort((a, b) => b.date_generated - a.date_generated);

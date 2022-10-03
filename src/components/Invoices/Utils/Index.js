// export const filterByDate

export const sortAscending = (payload) =>
  [...payload].sort((a, b) => a.date_generated - b.date_generated);

export const sortDescending = (payload) =>
  [...payload].sort((a, b) => b.date_generated - a.date_generated);

export const filterInvoices = (payload) => {
  const copy = payload.invoices.filter(
    (invoice) =>
      invoice.from.toLowerCase().includes(payload.filter) ||
      invoice.to.toLowerCase().includes(payload.filter)
  );
  return copy;
};

export const genPages = (invoices, count = 5, pages = []) => {
  /**
   * This will generate a 2d array. Each child will contain the target count of invoices (count)
   * [
   *    [{invoice}, {invoice}, {invoice}, {invoice}, {invoice}]
   * ]
   */

  let i = 0;
  invoices.forEach((invoice) => {
    pages[i] = pages[i] || [];
    pages[i].length < count && pages[i].push(invoice);
    i += pages[i].length >= count ? 1 : 0;
  });

  return pages;
};

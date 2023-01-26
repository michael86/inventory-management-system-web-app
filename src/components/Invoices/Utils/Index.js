import { v4 as uuidv4 } from "uuid";
// export const filterByDate

export const sortAscending = (payload) =>
  [...payload].sort((a, b) => a.billingDate - b.billingDate);

export const sortDescending = (payload) =>
  [...payload].sort((a, b) => b.billingDate - a.billingDate);

export const filterInvoices = (payload) => {
  const copy = payload.invoices.filter(
    (invoice) =>
      invoice.contact.toLowerCase().includes(payload.filter) ||
      invoice.name.toLowerCase().includes(payload.filter)
  );
  return copy;
};

export const genPages = (invoices, count = 5, pages = []) => {
  /**
   * This will generate a 2d array. Each child will contain the target count of invoices (count)
   * [
   *    [{invoice}, {invoice}, {invoice}, {invoice}, {invoice}],
   *    [{invoice}, {invoice}, {invoice}, {invoice}, {invoice}],
   *    [{invoice}, {invoice}, {invoice}, {invoice}, {invoice}]
   * ]
   */

  if (
    typeof count !== "number" ||
    !Array.isArray(invoices) ||
    !Array.isArray(pages)
  )
    return;

  let i = 0;
  invoices.forEach((invoice) => {
    pages[i] = pages[i] || [];
    pages[i].length < count && pages[i].push(invoice);
    i += pages[i].length >= count ? 1 : 0;
  });

  return pages;
};

export const findInvoiceById = (id, invoices) =>
  invoices.find((invoice) => invoice.id === id);

export const calculateCombinedCost = (arr) => {
  const combinedCosts = arr.map((item) =>
    calculateCombinedItemTax(item.quantity, item.price, item.tax)
  );

  return combinedCosts.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue)
  );
};

export const calculateCombinedItemTax = (qty, price, tax) => {
  const combinedCost = qty * price;
  const itemTax = ((combinedCost / 100) * tax).toFixed(2);
  return (Number(combinedCost) + Number(itemTax)).toFixed(2);
};

export const genInvoice = (payload) => {
  const newInvoice = {
    from: payload.userCompany,
    to: payload.invoiceCompanyName,
    date_generated: new Date(payload.dateGenerated).getTime(),
    id: uuidv4(),
    shipping: {
      name: payload.invoiceContactName,
      address: payload.invoiceCompanyAddress,
      city: payload.invoiceCompanyCity,
      state: payload.invoiceCompanyState,
      country: payload.invoiceCompanyCountry,
      postal_code: payload.invoiceCompanyPostcode,
    },
    items: payload.items,
    subtotal: 156,
    total: 156,
    order_number: payload.invoiceId,
    header: {
      company_name: "Nice Invoice",
      company_logo: "logo.png",
      company_address:
        "Nice Invoice. 123 William Street 1th Floor New York, NY 123456",
    },
    footer: {
      text: payload.Footer,
    },
    currency_symbol: "£",
    date: {
      billing_date: new Date(payload.billingDate).getTime(),
      due_date: new Date(payload.dueDate).getTime(),
    },
  };

  return newInvoice;
};

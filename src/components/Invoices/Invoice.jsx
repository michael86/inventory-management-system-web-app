import niceInvoice from "nice-invoice";

const invoiceDetail = {
  shipping: {
    name: "Micheal",
    address: "1234 Main Street",
    city: "Dubai",
    state: "Dubai",
    country: "UAE",
    postal_code: 94111,
  },
  items: [
    {
      item: "Chair",
      description: "Wooden chair",
      quantity: 1,
      price: 50.0,
      tax: "10%",
    },
    {
      item: "Watch",
      description: "Wall watch for office",
      quantity: 2,
      price: 30.0,
      tax: "10%",
    },
    {
      item: "Water Glass Set",
      description: "Water glass set for office",
      quantity: 1,
      price: 35.0,
      tax: "",
    },
  ],
  subtotal: 156,
  total: 156,
  order_number: 1234222,
  header: {
    company_name: "Nice Invoice",
    company_logo: "logo.png",
    company_address:
      "Nice Invoice. 123 William Street 1th Floor New York, NY 123456",
  },
  footer: {
    text: "This is footer - you can add any text here",
  },
  currency_symbol: "$",
  date: {
    billing_date: "08 August 2020",
    due_date: "10 September 2020",
  },
};

niceInvoice(invoiceDetail, "your-invoice-name.pdf");

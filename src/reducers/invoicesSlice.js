import { createSlice } from "@reduxjs/toolkit";
// import { setStore, updateStore } from "../localStorage";

const initialState = {
  invoices: [
    {
      id: "dflkjsafjlsdkfk4234234j",
      date_generated: 1022614839 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "hs8748dkjjfhsdjkfhns",
      date_generated: 1665067909 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fklda4678468sfkjdhkj",

      date_generated: 1779494195 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkj345435dhkjsdadsa",

      date_generated: 1405100982 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldas90990fkjdhkdadasdj",

      date_generated: 1188687493 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkj45545dhkjdasdasd",

      date_generated: 1765817052 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjd765765hdasdasdkj",

      date_generated: 1175559926 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldassadas234234dsadfkjdhkj",

      date_generated: 1067386416 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldaswqew875685eqwqfkjdhkj",

      date_generated: 1062237367 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fdsfdsf645654fkldasfkjdhkj",

      date_generated: 1295412956 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkgdfgfd24376gdfgjdhkj",

      date_generated: 1654527109 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfgfhgfhg7567657fhkjdhkj",

      date_generated: 1871145374 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjdhu2466346kjykjyukkj",

      date_generated: 1769868479 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkld62656as7654764fkjdhkj",

      date_generated: 1344360030 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fklda76756765sfkj45646dhkj",

      date_generated: 1849168000 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfk24324jdhkj",

      date_generated: 1633902855 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjdh567657kj",

      date_generated: 1203020102 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldas4246fkjdhkj",

      date_generated: 1298797849 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfksfgewjdhkj",

      date_generated: 1091292517 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "sssdwedf",

      date_generated: 1112254744 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjxcxcxcdhkj",

      date_generated: 1804968641 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjgggggdhkj",

      date_generated: 1619442876 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkdddldasfkjdhkj",

      date_generated: 1101655594 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfmjmjmjkjdhkj",

      date_generated: 1457802738 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjdrewrrewhkj",

      date_generated: 1478268137 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldaskjgmfkjdhkj",

      date_generated: 1202895299 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasxvcxvcxfkjdhkj",

      date_generated: 1335769700 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfsafefakjdhkj",

      date_generated: 1452336914 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasnmmgmfkjdhkj",

      date_generated: 1887743859 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkvbvbvjdhkj",

      date_generated: 1018444742 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfksfsfsjdhkj",

      date_generated: 1719258690 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldaskjkjkjfkjdhkj",

      date_generated: 1096022834 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkuyuyuuyldasfkjdhkj",

      date_generated: 1737203143 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkasasasajdhkj",

      date_generated: 1240719323 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfklklklkljdhkj",

      date_generated: 1302324208 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjtrtrtrdhkj",

      date_generated: 1292355103 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfnmmmnmnmkjdhkj",

      date_generated: 1239604763 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldassssssfkjdhkj",

      date_generated: 1645860397 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "vvvvvvffff",

      date_generated: 1706469001 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldmmmmasfkjdhkj",

      date_generated: 1657337248 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fklyyyydasfkjdhkj",

      date_generated: 1744112524 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkiiijdhkj",

      date_generated: 1503549923 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldrrrrasfkjdhkj",

      date_generated: 1173680725 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "mnnm",

      date_generated: 1131690619 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "cvbvcbbvc",

      date_generated: 1386156312 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjdczxczxchkj",

      date_generated: 1781731512 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkkjkuykjdhkj",

      date_generated: 1519474741 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkuioiuojdhkj",

      date_generated: 1049336498 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkwererwjdhkj",

      date_generated: 1523467647 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasvcbvbcbfkjdhkj",

      date_generated: 1614968133 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfksfdfjdhkj",

      date_generated: 1069233017 * 1000,
      from: "Creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjhjhjjdhkj",

      date_generated: 1357926506 * 1000,
      from: "me",
      to: "Creekview",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasgfdgfkjdhkj",

      date_generated: 1809162187 * 1000,
      from: "me",
      to: "Photomechanical",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "ttttttt",

      date_generated: 1250913320 * 1000,
      from: "me",
      to: "creekvieew",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasaaaafkjdhkj",

      date_generated: 1280950366 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfjjjjkjdhkj",

      date_generated: 1393034010 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldarrrrrsfkjdhkj",

      date_generated: 1806655946 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasjjjjfkjdhkj",

      date_generated: 1325194387 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkvvvvjdhkj",

      date_generated: 1314146698 * 1000,
      from: "creekview",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkssssjdhkj",

      date_generated: 1706369014 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
    {
      id: "fkldasfkjdddddhkj",

      date_generated: 955666812 * 1000,
      from: "photomechanical",
      to: "you",
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
      currency_symbol: "£",
      date: {
        billing_date: "08 August 2020",
        due_date: "10 September 2020",
      },
    },
  ],
};

export const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    getInvoice: (state, { id }) => {
      return state.invoices[id];
    },
    getInvoices: (state, { id }) => {
      return state.invoices;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getInvoice, getInvoices } = invoiceSlice.actions;

export default invoiceSlice.reducer;

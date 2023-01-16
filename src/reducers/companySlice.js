import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  street: "",
  city: "",
  county: "",
  country: "",
  postcode: "",
};

export const companySlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCompany: (state, { payload }) => {
      const { name, street, city, county, country, postcode } = payload;
      state.name = name;
      state.street = street;
      state.city = city;
      state.county = county;
      state.country = country;
      state.postcode = postcode;
    },
    setComanyName: (state, { payload }) => {
      state.name = payload;
    },
    setCompanyStreet: (state, { payload }) => {
      state.street = payload;
    },
    setCompanyCity: (state, { payload }) => {
      state.city = payload;
    },
    setCompanyCounty: (state, { payload }) => {
      state.county = payload;
    },
    setCompanyCountry: (state, { payload }) => {
      state.country = payload;
    },
    setCompanyPostcode: (state, { payload }) => {
      state.postcode = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCompany,
  setComanyName,
  setCompanyStreet,
  setCompanyCity,
  setCompanyCounty,
  setCompanyCountry,
  setCompanyPostcode,
} = companySlice.actions;

export default companySlice.reducer;

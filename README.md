# Inventory management system

This is a full stack project for the jump bootcamp. The aim is to create a full stack React app.

## Libaries & frameworks used.

1. Bootstrap
2. Chart.js
3. Joi Validation
4. React
5. React-Redux
6. React-router-Dom

## To do:

### Popup

Seems complete so far. May refactor stuff at later date if new funcitonality is required

- [x] Refactor buttons to be dynamically generated, this will allow me to call them within forms, as well as place in footer at later date.
- [x] Refactor form to use child components that will allow me to dynamically generate each input.
- [x] hook up form submit to local storage (This will be replaced by apis at later date)

### View Invoices

- [x] Create view invoice table
- [x] Add row count drop down
- [x] Add filter by date
- [x] Add filter by input
- [ ] Hook up 'View Invoice' buttons. This can't be done untill back is done

### Gen invoice

- [x] Create the To card. (who we are sending the invoice to)
- [x] Create the Items card.
- [x] Create tally card.
- [x] Need to convert each items qty and price to a number for invoice items array
- [x] Need to get user company address on registration for invoice header
- [ ] refactor item bubbling

### Settings component

Certain state will only be local storage (enabling dark mode and such)

- [x] Set layout
- [x] Add validation schema
- [x] Add local state
- [x] Add local storage
- [x] Load certain settings from local storage
- [x] Add success message for confirmation settings have been saved
- [x] Bug when setting company address, sets darkMode to false.

### profile component

- [ ] styling

### AddStock Component

- [ ] fix schema for company card (Joi validaiton not working correctly)
- [ ] load local state to validate if sku has been used
- [ ] handle form submit and store to local state (send to back end when complete)

### general

- [ ] Create static pages
- [x] Create local storage wrapper (May be updated with more functionality in future)
- [ ] Create charts
- [ ] Add Charts to Dashboard
- [ ] Overall restyle design
- [ ] Stuff I've no doubt missed.

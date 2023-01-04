# Inventory management system

This is a full stack project for the jump bootcamp. The aim is to create a full stack React app.

## Libaries & frameworks used.

1. Bootstrap
2. Chart.js
3. Joi Validation
4. React
5. React-Redux
6. React-router-Dom
7. FontAwesome

## Notes:

### Date object

Because of the way history would be created, we never had a starting point to create the dateObject from, this meant it would be harder to fill out any empty months if there was not a history snapshot. We'd have had ot look into the future, tehn in the past.
Due to this, if we create a snapshot in the history from the point of creation and then when editing, create a snapshot for the new values, we are now able to .sort() the history array and use the last snap shot for any empty months.

### Dashboard

Made a start on generating dataset when searching by sku. However, when clicking a date range that the sku isn't in the system, it causes the app to crash. So in theory, we can regenerate the dateObject by the search term, and this should allow the dashboard to update the timeButtons component to only contain valid dates. This would aslo allow for a better UX as it shows when the item was first entered into the system.

## To do:

### Popup

Seems complete so far. May refactor stuff at later date if new funcitonality is required

- [x] Refactor buttons to be dynamically generated, this will allow me to call them within forms, as well as place in footer at later date.
- [x] Refactor form to use child components that will allow me to dynamically generate each input.
- [x] hook up form submit to local storage (This will be replaced by apis at later date)
- [x] ~~stock component will state invalid sku if changed (not saved) then set back to current sku~~ Fixed
- [x] ~~Updating to and from free issue not working. Assume cause check box is either defined or undefined.~~ fixed

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

- [x] fix schema for company card (Joi validaiton not working correctly)
- [x] load local state to validate if sku has been used
- [x] handle form submit and store to local state (send to back end when complete)
- [x] Refactor to support pre filling.

### Dashboard

this is going to be a headache for testing

- [ ] reduce price pie chart to only 5
- [ ] add filters to both charts for highest and lowest
- [x] Create date object. See notes above
- [ ] update dateObject when searching by sku

### general

- [ ] Create static pages
- [x] Create local storage wrapper (May be updated with more functionality in future)
- [ ] Create charts
- [ ] Add Charts to Dashboard
- [ ] Overall restyle design
- [ ] Stuff I've no doubt missed.

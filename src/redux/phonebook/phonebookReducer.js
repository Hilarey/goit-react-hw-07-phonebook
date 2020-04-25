import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phonebookActions from "./phonebookActions";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (state, action) => action.payload,
  [phonebookActions.addContactSuccess]: addContact,
  [phonebookActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [phonebookActions.handleFilterChange]: (state, action) => action.payload,
});

const nightMode = createReducer(true, {
  [phonebookActions.handlModeToggle]: (state) => !state,
});

const loading = createReducer(false, {
  [phonebookActions.fetchContactsRequest]: () => true,
  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.removeContactRequest]: () => true,

  [phonebookActions.fetchContactsSuccess]: () => false,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.removeContactSuccess]: () => false,

  [phonebookActions.fetchContactsError]: () => false,
  [phonebookActions.addContactError]: () => false,
  [phonebookActions.removeContactError]: () => false,
});

const error = createReducer(
  null,
  {
    [phonebookActions.addContactError]: (state, { payload }) => payload,
    [phonebookActions.fetchContactsError]: (state, { payload }) => payload,
    [phonebookActions.removeContactError]: (state, { payload }) => payload,
  }
);

export default combineReducers({
  contacts,
  filter,
  nightMode,
  loading,
  error,
});

// componentDidMount() {
//   const persistedContacts = localStorage.getItem("contacts");

//   if (persistedContacts) {
//     this.setState({
//       contacts: JSON.parse(persistedContacts),
//     });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//   }
// }

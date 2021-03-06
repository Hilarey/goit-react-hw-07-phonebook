import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.phonebook.contacts;

const getLoading = (state) => state.phonebook.loading;

const getFilter = (state) => state.phonebook.filter;

const getError = state => state.phonebook.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find((contact) => contact.id === contactId)
);

export default { getLoading, getFilter,getError,  getVisibleContacts, getContactById };

// const getContactById = (state, contactId) => {
//   const contacts = getContacts(state);

//   return contacts.find((contact) => contact.id === contactId);
// };

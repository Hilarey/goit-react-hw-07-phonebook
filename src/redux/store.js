import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook/phonebookReducer";


const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});

export default store;

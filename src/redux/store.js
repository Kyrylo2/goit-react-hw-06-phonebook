import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { formDataSlice } from './formData/formDataSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contactList'],
};

const persistedContacts = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);

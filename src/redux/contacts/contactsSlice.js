import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = {
  contactList: [],
};
export const contactsSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      state.contactList.push({ id: nanoid(6), name, number });
    },

    deleteContact(state, action) {
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    newFormState(state, action) {
      console.log(action);
      state.name = action.payload.name;
      state.number = action.payload.number;
    },
    resetFormState(state) {
      state.name = '';
      state.number = '';
    },
  },
});

export const { newFormState, resetFormState } = formDataSlice.actions;

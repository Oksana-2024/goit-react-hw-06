import { createSlice } from "@reduxjs/toolkit";
import contacts from "../contacts.json";

const initialState = {
  items: contacts,
};
const slice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { deleteContact, addContact } = slice.actions;

export default slice.reducer;

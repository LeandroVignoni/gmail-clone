import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    senMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.senMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.senMessageIsOpen = false;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) =>
  state.email.senMessageIsOpen;

export default mailSlice.reducer;

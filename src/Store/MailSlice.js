import { createSlice } from "@reduxjs/toolkit";

export const fireBase =
  "https://joybox-mail-default-rtdb.asia-southeast1.firebasedatabase.app";

const initialState = {
  fireBase,

  inboxMails: [],
  sentMails: [],
  favoriteMails: [],
  trashMails: [],
  draftsMails: [],
};

const MailSlice = createSlice({
  name: "MailSlice",
  initialState,
  reducers: {},
});

export const MailAction = MailSlice.actions;

export default MailSlice.reducer;

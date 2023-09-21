import { createSlice } from "@reduxjs/toolkit";

export const fireBase =
  "https://joybox-mail-default-rtdb.asia-southeast1.firebasedatabase.app";

const initialState = {
  fireBase,
  allMails: [],
  inboxMails: [],
  sentMails: [],
  favoriteMails: [],
  trashMails: [],
  draftsMails: [],
};

const MailSlice = createSlice({
  name: "MailSlice",
  initialState,
  reducers: {
    addAllMails(states, actions) {
      states.allMails = actions.payload.allMails;
    },
    addInboxMails(states, actions) {
      states.inboxMails = actions.payload.inbox;
    },
    addSentMails(states, actions) {
      states.sentMails = actions.payload.sent;
    },
    addFavorite(states, actions) {
      states.favoriteMails = actions.payload.favorite;
    },
    addTrashMails(states, actions) {
      states.trashMails = actions.payload.trash;
    },
    addDraftsMails(states, actions) {
      states.draftsMails = actions.payload.drafts;
    },
  },
});

export const MailAction = MailSlice.actions;

export default MailSlice.reducer;

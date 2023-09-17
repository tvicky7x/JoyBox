import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    idToken: "",
    name: "",
    email: "",
    emailVerified: false,
    networkEmail: "",
    photoUrl: "",
    uniqueId: "",
  },
  isLogging: true,
  isForgot: false,
  apiToken: "AIzaSyAYLfpvm4HItUrb6rxmYb_lnz5-PT2Zsyw",
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    alternateLogging(states) {
      states.isLogging = !states.isLogging;
    },
    alternateForgot(states) {
      states.isForgot = !states.isForgot;
    },
    logIn(states, actions) {
      states.userInfo = actions.payload.userInfo;
    },
  },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice.reducer;

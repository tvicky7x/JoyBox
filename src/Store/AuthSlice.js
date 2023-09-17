import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userInfo: {
    name: "",
    email: "",
    networkEmail: "",
    photoUrl: "",
    uniqueId: "",
  },

  isStart: true,
  isLogging: true,
  isForgot: false,
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
  },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice.reducer;

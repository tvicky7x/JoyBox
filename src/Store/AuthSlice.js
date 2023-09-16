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
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    alternateLogging(states, actions) {
      states.isLogging = !states.isLogging;
    },
  },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice.reducer;

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
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice.reducer;

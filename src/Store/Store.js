import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import GeneralSlice from "./GeneralSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, general: GeneralSlice },
});

export default store;

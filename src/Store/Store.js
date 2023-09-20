import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import GeneralSlice from "./GeneralSlice";
import MailSlice from "./MailSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, general: GeneralSlice, mail: MailSlice },
});

export default store;

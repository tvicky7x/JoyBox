import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import NavbarSlice from "./NavbarSlice";
import GeneralSlice from "./GeneralSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, nav: NavbarSlice, general: GeneralSlice },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import NavbarSlice from "./NavbarSlice";

const store = configureStore({
  reducer: { auth: AuthSlice, nav: NavbarSlice },
});

export default store;

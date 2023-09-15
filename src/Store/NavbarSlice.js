import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: false,
};

const NavbarSlice = createSlice({
  name: "NavbarSlice",
  initialState,
  reducers: {
    openNav(states) {
      states.isNavOpen = true;
    },
    closeNav(states) {
      states.isNavOpen = false;
    },
  },
});

export const NavbarAction = NavbarSlice.actions;

export default NavbarSlice.reducer;

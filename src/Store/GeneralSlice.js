import { createSlice } from "@reduxjs/toolkit";
import LavenderField from "../Assets/leonard-cotte-c1Jp-fo53U8-unsplash.jpg";
import RiverSide from "../Assets/lucas-calloch-P-yzuyWFEIk-unsplash.jpg";
import WaterFall from "../Assets/robert-lukeman-zNN6ubHmruI-unsplash.jpg";
import YellowFlowers from "../Assets/sergey-shmidt-koy6FlCCy5s-unsplash.jpg";

const initialState = {
  background: [
    {
      bgName: "LavenderField",
      bgUrl: LavenderField,
    },
    {
      bgName: "RiverSide",
      bgUrl: RiverSide,
    },
    {
      bgName: "WaterFall",
      bgUrl: WaterFall,
    },
    {
      bgName: "YellowFlowers",
      bgUrl: YellowFlowers,
    },
  ],
  currentBg: {
    bgName: "WaterFall",
    bgUrl: WaterFall,
  },
};

const GeneralSlice = createSlice({
  name: "GeneralSlice",
  initialState,
  reducers: {
    changeBg(states, actions) {
      states.currentBg = actions.payload.bg;
    },
  },
});

export const GeneralAction = GeneralSlice.actions;

export default GeneralSlice.reducer;

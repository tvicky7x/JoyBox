import { createSlice } from "@reduxjs/toolkit";
import LavenderField from "../Assets/Backgrounds/leonard-cotte-c1Jp-fo53U8-unsplash.jpg";
import RiverSide from "../Assets/Backgrounds/lucas-calloch-P-yzuyWFEIk-unsplash.jpg";
import WaterFall from "../Assets/Backgrounds/robert-lukeman-zNN6ubHmruI-unsplash.jpg";
import YellowFlowers from "../Assets/Backgrounds/sergey-shmidt-koy6FlCCy5s-unsplash.jpg";
import avatar1 from "../Assets/Avatars/1.jpg";
import avatar2 from "../Assets/Avatars/2.jpg";
import avatar3 from "../Assets/Avatars/3.jpg";
import avatar4 from "../Assets/Avatars/4.jpg";
import avatar5 from "../Assets/Avatars/5.jpg";
import avatar6 from "../Assets/Avatars/6.jpg";
import avatar7 from "../Assets/Avatars/7.jpg";
import avatar8 from "../Assets/Avatars/8.jpg";
import avatar9 from "../Assets/Avatars/9.jpg";
import avatar10 from "../Assets/Avatars/10.jpg";
import avatar11 from "../Assets/Avatars/11.jpg";
import avatar12 from "../Assets/Avatars/12.jpg";
import empty from '../Assets/Avatars/Empty.jpg'

const avatarsList = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
];

const initialState = {
  backgrounds: [
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
    bgName: "YellowFlowers",
    bgUrl: YellowFlowers,
  },
  avatars: avatarsList,
  currentAvatar: avatarsList[Math.trunc(Math.random() * 10) + 3],
  avatarState: false,
  empty,
};

const GeneralSlice = createSlice({
  name: "GeneralSlice",
  initialState,
  reducers: {
    changeBg(states, actions) {
      states.currentBg = actions.payload.bg;
    },
    changeAvatar(states, actions) {
      states.currentAvatar = actions.payload.avatar;
      states.avatarState = false;
    },
    openAvatar(states) {
      states.avatarState = true;
    },
    closeAvatar(states) {
      states.avatarState = false;
    },
  },
});

export const GeneralAction = GeneralSlice.actions;

export default GeneralSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import LavenderField from "../Assets/Backgrounds/leonard-cotte-c1Jp-fo53U8-unsplash.jpg";
import WaterFall from "../Assets/Backgrounds/robert-lukeman-zNN6ubHmruI-unsplash.jpg";
import YellowFlowers from "../Assets/Backgrounds/sergey-shmidt-koy6FlCCy5s-unsplash.jpg";
import Mountains from "../Assets/Backgrounds/james-wheeler-AFC0XvICMgs-unsplash.jpg";
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
import empty from "../Assets/Avatars/Empty.jpg";

const avatars = [
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
      bgName: "WaterFall",
      bgUrl: WaterFall,
    },
    {
      bgName: "YellowFlowers",
      bgUrl: YellowFlowers,
    },
    {
      bgName: "Mountains",
      bgUrl: Mountains,
    },
  ],
  currentBg: {
    bgName: "Mountains",
    bgUrl: Mountains,
  },
  avatars,
  currentAvatar: avatar3,
  avatarState: false,
  empty,
  isLoading: false,
  isComposing: false,
  isNavOpen: false,
  isReading: false,
  editorStartContent: {
    to: "",
    subject: "",
    content: "",
    draftId: null,
    mini: false,
  },
  editorContent: { to: "", subject: "", content: "" },

  readingIndex: null,
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
    openLoading(states) {
      states.isLoading = true;
    },
    closeLoading(states) {
      states.isLoading = false;
    },
    openNav(states) {
      states.isNavOpen = true;
    },
    closeNav(states) {
      states.isNavOpen = false;
    },
    openComposing(states) {
      states.isComposing = true;
      states.editorStartContent.mini = false;
    },
    openComposingDraft(states, actions) {
      states.editorContent = actions.payload.data;
      states.editorStartContent = actions.payload.data;
      states.isComposing = true;
    },
    closeComposing(states) {
      states.isComposing = false;
      states.editorStartContent = {
        ...states.editorContent,
        mini: true,
        draftId: states.editorStartContent.draftId,
      };
    },
    changeEditorContent(states, actions) {
      if (actions.payload.type === "to") {
        states.editorContent.to = actions.payload.to;
      } else if (actions.payload.type === "subject") {
        states.editorContent.subject = actions.payload.subject;
      } else if (actions.payload.type === "content") {
        states.editorContent.content = actions.payload.content;
      }
    },
    deletingComposing(states) {
      states.isComposing = false;
      states.editorContent = { to: "", subject: "", content: "" };
      states.editorStartContent = {
        to: "",
        subject: "",
        content: "",
        mini: false,
      };
    },

    closeReading(states) {
      states.readingIndex = null;
      states.isReading = false;
    },
    openReadingIndex(states, actions) {
      states.readingIndex = actions.payload.index;
      states.isReading = true;
      states.isNavOpen = false;
    },
  },
});

export const GeneralAction = GeneralSlice.actions;

export default GeneralSlice.reducer;

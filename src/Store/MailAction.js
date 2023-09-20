import axios from "axios";
import { GeneralAction } from "./GeneralSlice";
import { fireBase } from "./MailSlice";

export function saveDraft({ editorContent, networkEmail }) {
  return async (dispatch) => {
    const response = await axios.post(
      `${fireBase}/${networkEmail}/drafts.json`,
      {
        date: new Date(),
        editorContent,
      }
    );
    const draftId = response.data.name;
    await axios.put(`${fireBase}/${networkEmail}/drafts/${draftId}.json`, {
      date: new Date(),
      editorContent: { ...editorContent, draftId },
    });
    dispatch(GeneralAction.deletingComposing());
  };
}

export function sendMail({
  editorContent,
  senderEmail,
  receiverEmail,
  networkEmail,

  draftId,
}) {
  return async (dispatch) => {
    if (draftId) {
      await axios.delete(`${fireBase}/${networkEmail}/drafts/${draftId}.json`);
    }
    await axios.post(`${fireBase}/${networkEmail}/sent.json`, {
      date: new Date(),
      from: senderEmail,
      editorContent,
      isRead: false,
      isFavorite: false,
      isTrash: false,
    });

    await axios.post(`${fireBase}/${receiverEmail}/inbox.json`, {
      date: new Date(),
      from: senderEmail,
      editorContent,
      isRead: false,
      isFavorite: false,
      isTrash: false,
    });
    dispatch(GeneralAction.deletingComposing());
  };
}

export function getMails(networkEmail, type) {
  return (dispatch) => {
    // if (type === "start") {
    //   let mailInterval = setInterval(async () => {
    //     const response = await axios.get(`${fireBase}/${networkEmail}.json`);
    //     dispatch(arrangeMails(response.data));
    //   }, 2000);
    //   localStorage.setItem("interval", mailInterval);
    // } else {
    //   clearInterval(localStorage.getItem("interval"));
    // }
  };
}

export function arrangeMails(data) {
  return (dispatch) => {
    if (data) {
      console.log(data);
    }
  };
}

import axios from "axios";
import { GeneralAction } from "./GeneralSlice";
import { MailAction, fireBase } from "./MailSlice";

export function saveDraft({ editorContent, networkEmail }) {
  return async (dispatch) => {
    await axios.post(`${fireBase}/${networkEmail}/drafts.json`, {
      date: new Date(),
      editorContent,
    });
    dispatch(GeneralAction.deletingComposing());
  };
}

export function sendMail({
  editorContent,
  senderEmail,
  receiverEmail,
  networkEmail,
  senderInfo,
  draftId,
}) {
  return async (dispatch) => {
    if (draftId) {
      await axios.delete(`${fireBase}/${networkEmail}/drafts/${draftId}.json`);
    }

    await axios.post(`${fireBase}/${networkEmail}/sent.json`, {
      date: new Date(),
      from: senderEmail,
      senderInfo,
      editorContent,
      isRead: false,
      isFavorite: false,
      isTrash: false,
    });

    await axios.post(`${fireBase}/${receiverEmail}/inbox.json`, {
      date: new Date(),
      from: senderEmail,
      senderInfo,
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
    if (type === "login") {
      let mailInterval = setInterval(async () => {
        const response = await axios.get(`${fireBase}/${networkEmail}.json`);
        dispatch(arrangeMails(response.data));
      }, 2000);
      localStorage.setItem("login", mailInterval);
    }
    if (type === "update") {
      let mailInterval = setInterval(async () => {
        const response = await axios.get(`${fireBase}/${networkEmail}.json`);
        dispatch(arrangeMails(response.data));
      }, 2000);
      localStorage.setItem("update", mailInterval);
    }
  };
}

export function arrangeMails(data) {
  return (dispatch) => {
    if (data) {
      if (data.inbox) {
        dispatch(
          MailAction.addInboxMails({ inbox: Object.entries(data.inbox) })
        );
      }
      if (data.sent) {
        dispatch(MailAction.addSentMails({ sent: Object.entries(data.sent) }));
      }
      if (data.drafts) {
        dispatch(
          MailAction.addDraftsMails({ drafts: Object.entries(data.drafts) })
        );
      }
    }
  };
}

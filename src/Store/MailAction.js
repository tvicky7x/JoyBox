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

export function getFastMails(networkEmail) {
  return async (dispatch) => {
    const response = await axios.get(`${fireBase}/${networkEmail}.json`);
    dispatch(arrangeMails(response.data));
  };
}

export function arrangeMails(data) {
  return (dispatch) => {
    if (data) {
      if (data.inbox) {
        const updatedData = Object.entries(data.inbox).map((item) => {
          item[1] = { ...item[1], id: item[0] };
          return item;
        });

        dispatch(MailAction.addAllMails({ allMails: updatedData }));
        dispatch(
          MailAction.addFavorite({
            favorite: updatedData.filter((item) => {
              return item[1].isFavorite === true;
            }),
          })
        );
        dispatch(
          MailAction.addTrashMails({
            trash: updatedData.filter((item) => {
              return item[1].isTrash === true;
            }),
          })
        );
        dispatch(
          MailAction.addInboxMails({
            inbox: updatedData.filter((item) => {
              return item[1].isTrash === false;
            }),
          })
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

export function updateMails(data, networkEmail, type) {
  return async (dispatch) => {
    let newData;
    if (type === "hasOpen") {
      newData = { ...data, isRead: true };
    } else if (type === "favorite") {
      newData = { ...data, isFavorite: !data.isFavorite };
    } else if (type === "trash") {
      newData = { ...data, isTrash: true };
    }

    await axios.put(
      `${fireBase}/${networkEmail}/inbox/${data.id}.json`,
      newData
    );
    dispatch(getFastMails(networkEmail));
  };
}

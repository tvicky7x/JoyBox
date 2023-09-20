import axios from "axios";
import { AuthAction } from "./AuthSlice";
import { GeneralAction } from "./GeneralSlice";
import { getMails } from "./MailAction";

export function getUserInfo(idToken) {
  return async (dispatch) => {
    try {
      dispatch(GeneralAction.openLoading());
      const reply = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAYLfpvm4HItUrb6rxmYb_lnz5-PT2Zsyw`,
        { idToken }
      );
      const newUserInfo = {
        idToken,
        name: reply.data.users[0].displayName,
        email: reply.data.users[0].email,
        emailVerified: reply.data.users[0].emailVerified,
        networkEmail: reply.data.users[0].email.replace(/[^a-zA-Z0-9]/gi, ""),
        photoUrl: reply.data.users[0].photoUrl,
      };

      dispatch(AuthAction.updateUser({ userInfo: newUserInfo }));
      dispatch(getMails(newUserInfo.networkEmail, "start"));
    } catch (error) {
      console.log(error);
    }
    dispatch(GeneralAction.closeLoading());
  };
}

export function logoutHandler(networkEmail) {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(getMails(networkEmail, "end"));
    dispatch(
      AuthAction.updateUser({
        userInfo: {
          idToken: "",
          name: "",
          email: "",
          emailVerified: false,
          networkEmail: "",
          photoUrl: "",
        },
      })
    );
  };
}

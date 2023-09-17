import axios from "axios";
import { AuthAction } from "./AuthSlice";

export function getUserInfo(idToken, apiToken) {
  return async (dispatch) => {
    const reply = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiToken}`,
      { idToken }
    );
    const newUserInfo = {
      idToken,
      name: reply.data.users[0].displayName,
      email: reply.data.users[0].email,
      emailVerified: reply.data.users[0].emailVerified,
      networkEmail: reply.data.users[0].email.replace(/[^a-zA-Z0-9]/gi, ""),
      photoUrl: reply.data.users[0].photoUrl,
      uniqueId: "",
    };
    dispatch(AuthAction.logIn({ userInfo: newUserInfo }));
  };
}

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../Store/AuthSlice";
import axios from "axios";
import SelectAvatar from "./SelectAvatar";
import { GeneralAction } from "../../Store/GeneralSlice";
import ImageContainer from "../Container/ImageContainer";

function AuthForm() {
  const dispatch = useDispatch();
  const currentBg = useSelector((states) => states.general.currentBg);
  const isLogging = useSelector((states) => states.auth.isLogging);
  const isForgot = useSelector((states) => states.auth.isForgot);
  const avatarState = useSelector((states) => states.general.avatarState);
  const currentAvatar = useSelector((states) => states.general.currentAvatar);
  const apiToken = useSelector((states) => states.auth.apiToken);
  const userInfo = useSelector((states) => states.auth.userInfo);

  console.log(userInfo);

  // Refs
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmInput = useRef();

  // After Submit Form
  async function submitHandler(e) {
    e.preventDefault();
    const email = emailInput.current.value;
    if (!isForgot) {
      const password = passwordInput.current.value;
      if (!isLogging) {
        const name = nameInput.current.value;
        const confirm = confirmInput.current.value;
        if (password === confirm) {
          const response = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiToken}`,
            {
              email,
              password,
              returnSecureToken: true,
            }
          );
          const idToken = response.data.idToken;
          await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiToken}`,
            {
              idToken,
              displayName: name,
              photoUrl: currentAvatar,
              returnSecureToken: false,
            }
          );
          e.target.reset();
          dispatch(AuthAction.alternateLogging());
        } else {
          alert("Incorrect Confirm Password");
        }
      } else {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiToken}`,
          { email, password, returnSecureToken: true }
        );
        const reply = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiToken}`,
          { idToken: response.data.idToken }
        );
        const userInfo = {
          idToken: response.data.idToken,
          name: reply.data.users[0].displayName,
          email: reply.data.users[0].email,
          emailVerified: reply.data.users[0].emailVerified,
          networkEmail: reply.data.users[0].email.replace(/[^a-zA-Z0-9]/gi, ""),
          photoUrl: reply.data.users[0].photoUrl,
          uniqueId: "",
        };
        dispatch(AuthAction.logIn({ userInfo }));
        e.target.reset();
      }
    } else {
      await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiToken}`,
        { requestType: "PASSWORD_RESET", email }
      );
      e.target.reset();
      dispatch(AuthAction.alternateForgot());
    }
  }

  return (
    <>
      <div
        className=" w-screen h-screen  bg-center bg-cover"
        style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
      >
        <div className="w-screen h-screen backdrop-blur flex flex-col items-center justify-center py-10 px-4">
          {/* Joy Box Text Above */}
          <p className=" headFont font-semibold text-xl leading-4 text-white">
            JoyBox
          </p>
          <p className="mb-3 text-white font-light">Bring Joy to you Inbox</p>

          {/* Avatar Form Page */}
          {avatarState && <SelectAvatar />}

          {/* Login and Signup page */}
          {!avatarState && (
            <>
              <div className="text-slate-950 p-4 bg-white bg-opacity-70 drop-shadow-md w-full max-w-sm rounded-lg">
                {/* Heading of a form */}
                <h1 className=" text-blue-500 headFont font-medium text-2xl text-center">
                  {!isForgot
                    ? isLogging
                      ? "Log In"
                      : "Sign Up"
                    : "Forgot Password"}
                </h1>

                {/* Forgot Massage */}
                {isForgot && (
                  <p className="mt-2.5 mb-2.5 text-slate-700">
                    Password reset email will be sent to your provided email
                    address.
                  </p>
                )}

                {/* Current Avatar Image */}
                {!isLogging && !isForgot && (
                  <div className=" mt-2 flex flex-col items-center">
                    <ImageContainer />
                    <button
                      onClick={() => dispatch(GeneralAction.openAvatar())}
                      className="mt-0.5 font-medium opacity-80 text-blue-500 hover:opacity-95 hover:text-blue-600"
                    >
                      Change Profile Image
                    </button>
                  </div>
                )}

                {/* Actual From Element */}
                <div className="mb-4 mt-1">
                  <form action="" onSubmit={submitHandler}>
                    {!isForgot && !isLogging && (
                      <div className="mb-3">
                        <label htmlFor="" className="ps-1">
                          Name
                        </label>
                        <input
                          ref={nameInput}
                          required
                          type="text"
                          className=" font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <label htmlFor="" className="ps-1">
                        Email
                      </label>
                      <input
                        ref={emailInput}
                        required
                        type="text"
                        className=" font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                      />
                    </div>
                    {!isForgot && (
                      <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input
                          ref={passwordInput}
                          required
                          type="password"
                          className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                        />
                      </div>
                    )}
                    {!isForgot && !isLogging && (
                      <div className="">
                        <label htmlFor="">Confirm Password</label>
                        <input
                          ref={confirmInput}
                          required
                          type="password"
                          className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                        />
                      </div>
                    )}

                    {/* Submit button with forgot button */}
                    <div className="mt-5 text-center">
                      <button
                        type="submit"
                        className=" bg-blue-500 w-full py-1.5 font-medium rounded text-blue-50 hover:bg-blue-600"
                      >
                        {!isForgot
                          ? isLogging
                            ? "Log In"
                            : "Sign Up"
                          : "Reset Password"}
                      </button>
                      {isLogging && (
                        <button
                          type="button"
                          className=" mt-2"
                          onClick={() => dispatch(AuthAction.alternateForgot())}
                        >
                          {!isForgot ? "Forgot password" : "Go Back"}
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                {/* Alternate isLogging state Button */}
                {!isForgot && (
                  <button
                    onClick={() => dispatch(AuthAction.alternateLogging())}
                    className=" bg-white w-full py-2 rounded text-slate-950 text-opacity-80 font-medium bg-opacity-50 hover:bg-opacity-80 hover:text-opacity-95"
                  >
                    {isLogging
                      ? "Don't have an account? Sign Up"
                      : "Have an account? Log In"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthForm;

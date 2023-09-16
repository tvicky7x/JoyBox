import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../Store/AuthSlice";

function Auth() {
  const dispatch = useDispatch();
  const currentBg = useSelector((states) => states.general.currentBg);
  const isLogging = useSelector((states) => states.auth.isLogging);
  const isForgot = useSelector((states) => states.auth.isForgot);

  return (
    <>
      <div
        className=" w-screen h-screen  bg-center bg-cover"
        style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
      >
        <div className="w-screen h-screen backdrop-blur flex flex-col items-center justify-center py-10 px-4">
          <p className=" headFont font-semibold text-xl leading-4 text-white">
            JoyBox
          </p>
          <p className="mb-3 text-white font-light">Bring Joy to you Inbox</p>
          <div
            className={` text-slate-950 p-4 bg-white bg-opacity-70 drop-shadow-md w-full max-w-sm rounded-lg`}
          >
            <h1 className=" sm:text-blue-600 text-blue-500 headFont font-medium text-2xl text-center">
              {!isForgot
                ? isLogging
                  ? "Log In"
                  : "Sign Up"
                : "Forgot Password"}
            </h1>
            {isForgot && (
              <p className="mt-2.5 sm:text-slate-800 text-slate-700">
                Password reset emails will be sent to your provided email
                address
              </p>
            )}

            <div className="py-4">
              <form action="">
                {!isForgot && !isLogging && (
                  <div className="mb-3">
                    <label htmlFor="" className="ps-1">
                      Name
                    </label>
                    <input
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
                    required
                    type="text"
                    className=" font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                  />
                </div>
                {!isForgot && (
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input
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
                      required
                      type="password"
                      className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                    />
                  </div>
                )}

                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    className="sm:bg-blue-600 bg-blue-500 w-full py-1.5 font-medium rounded text-blue-50 hover:bg-blue-600"
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
            {!isForgot && (
              <button
                onClick={() => dispatch(AuthAction.alternateLogging())}
                className=" bg-white w-full py-2 rounded  font-medium bg-opacity-50 hover:bg-opacity-80 "
              >
                {isLogging
                  ? "Don't have an account? Sign Up"
                  : "Have an account? Log In"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

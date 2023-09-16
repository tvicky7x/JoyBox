import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../Store/AuthSlice";

function Auth() {
  const dispatch = useDispatch();
  const currentBg = useSelector((states) => states.general.currentBg);
  const isLogging = useSelector((states) => states.auth.isLogging);

  return (
    <>
      <div
        className=" w-screen h-screen  bg-center bg-cover"
        style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
      >
        <div className="w-screen h-screen backdrop-blur flex items-center justify-center py-10 px-4">
          <div
            className={` text-slate-950 p-4 bg-white bg-opacity-70 drop-shadow-md w-full max-w-sm rounded-lg`}
          >
            <h1 className=" sm:text-blue-600 text-blue-500 headFont font-medium text-2xl text-center">
              {isLogging ? "Log In" : "Sign Up"}
            </h1>
            <div className="py-4">
              <form action="">
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
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input
                    required
                    type="password"
                    className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-400 focus:border-blue-500"
                  />
                </div>
                {!isLogging && (
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
                    {isLogging ? "Log In" : "Sign Up"}
                  </button>
                  {isLogging && (
                    <button className=" mt-2">Forgot password</button>
                  )}
                </div>
              </form>
            </div>

            <button
              onClick={() => dispatch(AuthAction.alternateLogging())}
              className=" bg-white w-full py-2 rounded bg-opacity-80 font-medium hover:bg-opacity-95"
            >
              {isLogging
                ? "Don't have an account? Sign Up"
                : "Have an account? Log In"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

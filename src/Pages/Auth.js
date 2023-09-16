import React from "react";
import { useSelector } from "react-redux";

function Auth() {
  const currentBg = useSelector((states) => states.general.currentBg);

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
            <h1 className=" text-blue-500 headFont font-medium text-2xl text-center">
              Sign Up
            </h1>
            <div>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="" className="ps-1">
                    Email
                  </label>
                  <input
                    type="text"
                    className=" font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div className="">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    className="font-medium bg-transparent focus:outline-none w-full h-6 px-1 pb-1 border-0 border-b-2 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div className="mt-5">
                  <button className=" bg-blue-500 w-full py-1 font-medium rounded text-blue-50 hover:bg-blue-600">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

import React from "react";
import { useSelector } from "react-redux";

function Auth() {
  const currentBg = useSelector((states) => states.general.currentBg);

  return (
    <>
      <div
        className=" w-screen h-screen flex items-center justify-center py-10 px-4 bg-center bg-cover"
        style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
      >
        <div
          className={` font-medium text-slate-950 px-3 py-4  backdrop-blur-lg  border border-slate-50 border-opacity-20 w-full max-w-md rounded-lg`}
        >
          <h1 className=" headFont font-medium text-2xl text-center">Signup</h1>
          <form action="">
            <div className="px-1 mb-3">
              <label htmlFor="" className="text-base">
                Email
              </label>
              <div className="relative group">
                <svg
                  className=" group-focus-within:fill-blue-600 transition-colors fill-slate-950  absolute w-4 right-1 top-1/2 -translate-y-1/2"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M43,16.976 L43,33.75 C43,36.6494949 40.6494949,39 37.75,39 L10.25,39 C7.35050506,39 4.99976748,36.6494949 4.99976748,33.75 L4.99976748,16.976 L23.3976016,27.0952699 C23.7727049,27.3015767 24.2272951,27.3015767 24.6023984,27.0952699 L43,16.976 Z M37.75,9 C40.6074055,9 42.9316438,11.2827599 42.9985196,14.1240842 L24,24.573411 L5.00176748,14.124 L5.00437905,14.0335954 C5.11786837,11.2344489 7.42299244,9 10.25,9 L37.75,9 Z"></path>
                </svg>
                <input
                  type="text"
                  className=" pb-2 w-full sm:text-lg font-semibold bg-transparent  focus:outline-none"
                />
                <div className=" w-full rounded-full h-[1.6px] bg-slate-900"></div>
              </div>
            </div>
            <div className="px-1 mb-3">
              <label htmlFor="" className="text-base">
                Password
              </label>
              <div className="relative group">
                <svg
                  className="  group-focus-within:fill-blue-600  fill-slate-950  absolute w-4 right-1 top-1/2 -translate-y-1/2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2 C14.209139,2 16,3.790861 16,6 L16,8 L18.5,8 C19.3284271,8 20,8.67157288 20,9.5 L20,20.5 C20,21.3284271 19.3284271,22 18.5,22 L5.5,22 C4.67157288,22 4,21.3284271 4,20.5 L4,9.5 C4,8.67157288 4.67157288,8 5.5,8 L8,8 L8,6 C8,3.790861 9.790861,2 12,2 Z M12.000125,13.5 C11.1716979,13.5 10.500125,14.1715729 10.500125,15 C10.500125,15.8284271 11.1716979,16.5 12.000125,16.5 C12.8285521,16.5 13.500125,15.8284271 13.500125,15 C13.500125,14.1715729 12.8285521,13.5 12.000125,13.5 Z M12,4 C10.8954305,4 10,4.8954305 10,6 L10,8 L14,8 L14,6 C14,4.8954305 13.1045695,4 12,4 Z"></path>
                </svg>
                <input
                  type="password"
                  className=" pb-2 w-full sm:text-lg font-semibold bg-transparent  focus:outline-none"
                />
                <div className=" w-full rounded-full h-[1.6px] bg-slate-950"></div>
              </div>
            </div>
            <div className="px-1 mb-3">
              <label htmlFor="" className="text-base">
                Email
              </label>
              <div className="relative group">
                <svg
                  className="  group-focus-within:fill-blue-600 fill-slate-950  absolute w-4 right-1 top-1/2 -translate-y-1/2"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M43,16.976 L43,33.75 C43,36.6494949 40.6494949,39 37.75,39 L10.25,39 C7.35050506,39 4.99976748,36.6494949 4.99976748,33.75 L4.99976748,16.976 L23.3976016,27.0952699 C23.7727049,27.3015767 24.2272951,27.3015767 24.6023984,27.0952699 L43,16.976 Z M37.75,9 C40.6074055,9 42.9316438,11.2827599 42.9985196,14.1240842 L24,24.573411 L5.00176748,14.124 L5.00437905,14.0335954 C5.11786837,11.2344489 7.42299244,9 10.25,9 L37.75,9 Z"></path>
                </svg>
                <input
                  type="text"
                  className=" pb-2 w-full sm:text-lg font-semibold bg-transparent  focus:outline-none"
                />
                <div className=" w-full rounded-full h-[1.6px] bg-slate-950"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;

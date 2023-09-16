import React from "react";
import { useSelector } from "react-redux";

function MainContainer({ children }) {
  const currentBg = useSelector((states) => states.general.currentBg);
  const isNavOpen = useSelector((states) => states.nav.isNavOpen);
  return (
    <div
      className=" w-screen h-screen flex items-center justify-center py-10 px-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
    >
      <div
        className={` backdrop-blur-lg  border border-slate-50 border-opacity-20 w-full h-full max-w-5xl rounded-lg grid grid-rows-12 ${
          isNavOpen && "grid-rows-2"
        }  sm:grid-rows-none sm:grid-flow-col sm:grid-cols-12 overflow-y-hidden`}
      >
        {children}
      </div>
    </div>
  );
}

export default MainContainer;

import React from "react";
import { useSelector } from "react-redux";

function MainContainer({ children }) {
  const currentBg = useSelector((states) => states.general.currentBg);
  return (
    <div
      className=" w-screen h-screen flex items-center justify-center py-10 px-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${currentBg.bgUrl})` }}
    >
      <div className="w-full h-full border border-white max-w-5xl border-opacity-40 bg-black bg-opacity-20 rounded-lg">
        <div
          className={` backdrop-blur-lg   rounded-lg h-full grid  grid-flow-col grid-cols-12 overflow-y-hidden`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

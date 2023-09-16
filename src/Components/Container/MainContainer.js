import React from "react";
import { useSelector } from "react-redux";
import LavenderField from "../../Assets/leonard-cotte-c1Jp-fo53U8-unsplash.jpg";

function MainContainer({ children }) {
  const isNavOpen = useSelector((states) => states.nav.isNavOpen);
  return (
    <div
      className=" w-screen h-screen sm:flex sm:items-center sm:justify-center py-10 px-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${LavenderField})` }}
    >
      <div
        className={` backdrop-blur border border-slate-50 w-full h-full max-w-5xl rounded-2xl grid grid-rows-12 ${
          isNavOpen && "grid-rows-2"
        }  sm:grid-rows-none sm:grid-flow-col sm:grid-cols-12 overflow-y-hidden`}
      >
        {children}
      </div>
    </div>
  );
}

export default MainContainer;

import React from "react";

function MainContainer({ children }) {
  return (
    <div className=" w-screen h-screen sm:flex sm:items-center sm:justify-center py-10 px-4">
      <div className=" bg-gradient-to-b from-cyan-500 to-blue-800 w-full h-full max-w-5xl p-1 rounded-2xl grid sm:grid-rows-none grid-rows-12 sm:grid-flow-col sm:grid-cols-12 overflow-y-hidden">
        {children}
      </div>
    </div>
  );
}

export default MainContainer;

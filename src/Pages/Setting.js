import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../Store/GeneralSlice";

function Setting() {
  const dispatch = useDispatch();
  const backgrounds = useSelector((states) => states.general.backgrounds);

  return (
    <>
      <h1 className="headFont row-span-1 text-blue-800 text-xl">Setting</h1>
      <div className=" row-span-full row-start-2 overflow-y-scroll ">
        <p className=" mt-1 mb-2 text-center font-medium ">
          Change Background Image
        </p>
        {backgrounds.map((item) => {
          return (
            <button
              onClick={() => dispatch(GeneralAction.changeBg({ bg: item }))}
              className=" px-2 pb-1 pt-2 text-center mb-2 bg-white bg-opacity-60 hover:bg-opacity-95 rounded"
            >
              <img className=" rounded" src={item.bgUrl} alt="" />
              <p className=" mt-1 font-semibold text-slate-900 text-sm">
                {item.bgName}
              </p>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Setting;

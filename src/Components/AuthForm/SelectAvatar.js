import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";

function SelectAvatar() {
  const dispatch = useDispatch();
  const avatars = useSelector((states) => states.general.avatars);
  //  Ref
  const urlInput = useRef();

  return (
    <div className="text-slate-950 p-4 bg-white bg-opacity-70 drop-shadow-md w-full max-w-sm rounded-lg">
      <p className=" headFont text-center text-lg">Select Profile Image</p>
      <div className=" mt-3 grid grid-rows-3 gap-3 grid-cols-4 grid-flow-col">
        {avatars.map((item, index) => {
          return (
            <img
              key={index}
              className=" rounded-full ring-1 drop-shadow-md hover:ring-2 hover:ring-blue-500 transition-all duration-150 "
              src={item}
              alt=""
              onClick={() =>
                dispatch(GeneralAction.changeAvatar({ avatar: item }))
              }
            />
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <div className="w-full border-0 border-b-2 border-slate-400"></div>
        <p className="text-slate-500">Or</p>
        <div className="w-full border-0 border-b-2 border-slate-400"></div>
      </div>
      <div className="mt-1">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              GeneralAction.changeAvatar({ avatar: urlInput.current.value })
            );
          }}
        >
          <label htmlFor="" className="ps-1">
            Upload Image URL
          </label>
          <input
            required
            ref={urlInput}
            type="text"
            className=" bg-white bg-opacity-95 mt-1.5 rounded font-medium  focus:outline-none w-full h-7 p-1 border border-slate-400 focus:border-0 focus:ring-1 focus:ring-blue-600"
          />
          <div className="mt-1 text-center">
            <button
              type="submit"
              className=" mt-3 bg-blue-500 w-full py-1.5 font-medium rounded text-blue-50 hover:bg-blue-600"
            >
              Upload
            </button>
            <button
              type="button"
              className=" mt-1"
              onClick={() => dispatch(GeneralAction.closeAvatar())}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SelectAvatar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectAvatar from "../Components/AuthForm/SelectAvatar";
import ButtonPrimary from "../Components/Container/ButtonPrimary";
import { useRef } from "react";
import { updateProfile } from "../Store/MailAction";

function Profile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const apiToken = useSelector((states) => states.auth.apiToken);

  // ref
  const nameRef = useRef();

  return (
    <>
      <h1 className="headFont row-span-1 text-blue-800 text-xl">Profile</h1>
      <div className=" row-span-full row-start-2 overflow-y-scroll">
        <div className=" bg-white bg-opacity-60 p-4 rounded-lg ">
          <div className=" flex justify-center w-full">
            <img
              className=" w-16 h-16 rounded-full object-cover ring-1 drop-shadow-sm "
              src={`${window.location.origin}${userInfo.photoUrl}`}
              alt=""
              onError={(e) => (e.target.src = userInfo.photoUrl)}
            />
          </div>
          <p className="mt-2 font-medium">
            Name -{" "}
            <span className=" capitalize text-blue-700">{userInfo.name}</span>
          </p>
          <p className=" font-medium">
            Email - <span className=" text-blue-700">{userInfo.email}</span>
          </p>
        </div>
        <div className="mt-3  bg-white bg-opacity-60 p-4 rounded-lg">
          <p className=" headFont text-center text-lg">Change Profile Name</p>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                updateProfile(
                  userInfo.photoUrl,
                  nameRef.current.value,
                  userInfo.idToken,
                  apiToken
                )
              );
              e.target.reset();
            }}
          >
            <input
              ref={nameRef}
              required
              className=" bg-white bg-opacity-80 focus:opacity-90 mt-1.5 rounded font-medium  focus:outline-none w-full h-8 p-1 border border-slate-400 focus:border-0 focus:ring-1 focus:ring-blue-600"
              type="text"
              placeholder="Name"
            />
            <ButtonPrimary type="submit" className=" w-full mt-4">
              Change Name
            </ButtonPrimary>
          </form>
        </div>
        <div className=" mt-3">
          <SelectAvatar />
        </div>
      </div>
      {/* <div className=" row-span-5 flex items-start flex-col justify-center p-3 bg-white bg-opacity-60 row-start-2 rounded-lg">
        
      <div className=" row-span-full row-start-7 mt-3 overflow-y-scroll">
        <SelectAvatar />
      </div> */}
    </>
  );
}

export default Profile;

import React from "react";
import { useSelector } from "react-redux";
import SelectAvatar from "../Components/AuthForm/SelectAvatar";

function Profile() {
  const userInfo = useSelector((states) => states.auth.userInfo);
  const currentAvatar = useSelector((states) => states.general.currentAvatar);

  return (
    <>
      <h1 className="headFont row-span-1 text-blue-800 text-xl">Profile</h1>
      <div className=" row-span-full row-start-2 overflow-y-scroll">
        <div className=" bg-white bg-opacity-60 p-3 rounded-lg ">
          <div className=" flex justify-center w-full">
            <img
              className=" w-16 h-16 drop-shadow-sm rounded-full object-cover"
              src={`${window.location.origin}${userInfo.photoUrl}`}
              alt=""
              onError={(e) => (e.target.src = userInfo.photoUrl)}
            />
          </div>
          <p className="mt-2 font-medium">
            Name - <span className=" text-blue-700">{userInfo.name}</span>
          </p>
          <p className=" font-medium">
            Email - <span className=" text-blue-700">{userInfo.email}</span>
          </p>
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

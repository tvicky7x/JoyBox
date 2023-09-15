import React from "react";
import logo from "../../Assets/orignal joybox.png";

function Navbar() {
  return (
    <div className=" sm:col-span-3 p-3 row-span-1">
      <div className=" flex items-center space-x-1">
        <img className=" w-7 sm:w-9 drop-shadow" src={logo} alt="" />
        <h1 className=" headFont font-medium text-white text-xl sm:text-2xl">
          Joy Box
        </h1>
      </div>
    </div>
  );
}

export default Navbar;

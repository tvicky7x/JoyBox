import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ navData }) {
  return (
    <li className="py-1">
      <NavLink
        to={navData.path}
        className={({ isActive }) => {
          return isActive
            ? "activeNav  text-blue-800 fill-blue-800 bg-white bg-opacity-70"
            : " text-white fill-white font-light opacity-90";
        }}
      >
        <div className="headFont relative bg-inherit flex items-center justify-start py-2 ps-4 space-x-2 rounded-s-lg">
          <svg
            className={navData.className}
            viewBox={navData.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={navData.d}></path>
          </svg>
          <p>{navData.navName}</p>
        </div>
      </NavLink>
    </li>
  );
}

export default NavItem;

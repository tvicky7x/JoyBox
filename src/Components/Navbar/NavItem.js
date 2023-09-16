import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ navData }) {
  return (
    <li className="py-1">
      <NavLink
        to={navData.path}
        className={({ isActive }) => {
          return isActive
            ? "activeNav  text-white fill-white font-light bg-white bg-opacity-40"
            : " text-white fill-white font-light ";
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

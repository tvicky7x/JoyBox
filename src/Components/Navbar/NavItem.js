import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavItem({ navData }) {
  const isNavOpen = useSelector((states) => states.general.isNavOpen);
  return (
    <li className="py-0.5 ms-2">
      <NavLink
        to={navData.path}
        className={({ isActive }) => {
          return isActive
            ? "activeNav  text-blue-800 fill-blue-800 bg-white bg-opacity-60"
            : " text-white fill-white font-light opacity-90";
        }}
      >
        <div
          className={`headFont relative bg-inherit flex items-center ${
            isNavOpen ? "justify-start ps-3" : "justify-center"
          } sm:justify-start   py-2 sm:ps-3 sm:py-3 space-x-2 rounded-s-lg`}
        >
          <svg
            className={`${navData.className} ${
              isNavOpen ? "me-0" : "me-2"
            } sm:me-0`}
            viewBox={navData.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={navData.d}></path>
          </svg>
          <p className={`${isNavOpen ? "block" : "hidden"} sm:block`}>
            {navData.navName}
          </p>
        </div>
      </NavLink>
    </li>
  );
}

export default NavItem;

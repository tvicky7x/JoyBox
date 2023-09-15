import React from "react";
import logo from "../../Assets/orignal joybox.png";
import { useDispatch, useSelector } from "react-redux";
import { NavbarAction } from "../../Store/NavbarSlice";

function Navbar() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((states) => states.nav.isNavOpen);
  return (
    <div className=" sm:col-span-3 p-3">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center space-x-1">
          <img className=" w-7 sm:w-9 drop-shadow" src={logo} alt="" />
          <h1 className=" headFont font-medium text-white text-xl sm:text-2xl">
            Joy Box
          </h1>
        </div>
        {!isNavOpen && (
          <button
            className=" sm:hidden"
            onClick={() => dispatch(NavbarAction.openNav())}
          >
            <svg
              viewBox="0 0 20 20"
              className=" w-7 h-7 stroke-white fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z" />
              <path d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z" />
              <path d="M2.5 14C2.22386 14 2 14.2239 2 14.5C2 14.7761 2.22386 15 2.5 15H17.5C17.7761 15 18 14.7761 18 14.5C18 14.2239 17.7761 14 17.5 14H2.5Z" />
            </svg>
          </button>
        )}

        {isNavOpen && (
          <button
            className=" sm:hidden"
            onClick={() => dispatch(NavbarAction.closeNav())}
          >
            <svg
              viewBox="0 0 28 28"
              className=" w-6 h-6 stroke-white fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavbarAction } from "../../Store/NavbarSlice";
import NavItem from "./NavItem";

function Navbar() {
  const NavData = [
    {
      navName: "Inbox",
      className: "w-5 shrink-0",
      path: "/",
      viewBox: "0 0 48 48",
      d: "M43,16.976 L43,33.75 C43,36.6494949 40.6494949,39 37.75,39 L10.25,39 C7.35050506,39 4.99976748,36.6494949 4.99976748,33.75 L4.99976748,16.976 L23.3976016,27.0952699 C23.7727049,27.3015767 24.2272951,27.3015767 24.6023984,27.0952699 L43,16.976 Z M37.75,9 C40.6074055,9 42.9316438,11.2827599 42.9985196,14.1240842 L24,24.573411 L5.00176748,14.124 L5.00437905,14.0335954 C5.11786837,11.2344489 7.42299244,9 10.25,9 L37.75,9 Z",
    },
    {
      navName: "Favorite",
      className: "w-5 shrink-0",
      path: "/favorite",
      viewBox: "0 0 28 28",
      d: "M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z",
    },
    {
      navName: "Sent",
      className: "w-4 shrink-0 me-[3px] ms-[2px]",
      path: "/sent",
      viewBox: "0 0 28 28",
      d: "M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z",
    },
    {
      navName: "Drafts",
      className: "w-5 shrink-0",
      path: "/drafts",
      viewBox: "0 0 24 24",
      d: "M13.9391717,4.99957288 L19.0001717,10.0605729 L9.06200371,19.9986565 C8.78512854,20.2755316 8.44079112,20.4753584 8.06302761,20.5783848 L2.94733805,21.9735729 C2.38746387,22.1262658 1.87373417,21.6125361 2.02642713,21.0526619 L3.4216152,15.9369724 C3.52464161,15.5592089 3.72446837,15.2148715 4.00134354,14.9379963 L13.9391717,4.99957288 Z M6.525,10.9995729 L5.025,12.4995729 L2.75,12.5 C2.33578644,12.5 2,12.1642136 2,11.75 C2,11.3357864 2.33578644,11 2.75,11 L6.525,10.9995729 Z M20.8773586,2.8252892 L21.0303301,2.96966991 L21.1747108,3.12264143 C22.4260103,4.52786334 22.3778834,6.68277675 21.0303301,8.03033009 L20.0601717,8.99957288 L14.9991717,3.93957288 L15.9696699,2.96966991 C17.3172232,1.62211658 19.4721367,1.57398967 20.8773586,2.8252892 Z M10.525,6.99957288 L9.025,8.49957288 L2.75,8.5 C2.33578644,8.5 2,8.16421356 2,7.75 C2,7.33578644 2.33578644,7 2.75,7 L10.525,6.99957288 Z M14.525,2.99957288 L13.025,4.49957288 L2.75,4.5 C2.33578644,4.5 2,4.16421356 2,3.75 C2,3.33578644 2.33578644,3 2.75,3 L14.525,2.99957288 Z",
    },
    {
      navName: "Trash",
      className: "w-6 shrink-0 -me-[3px] -ms-0.5",
      path: "/trash",
      viewBox: "0 0 48 48",
      d: "M24,6.75 C27.3750735,6.75 30.1253119,9.4252368 30.245878,12.7708731 L30.25,13.0010013 L37,13 C37.9664983,13 38.75,13.7835017 38.75,14.75 C38.75,15.6681734 38.0428897,16.4211923 37.1435272,16.4941988 L37,16.5 L35.833,16.5 L34.2058308,38.0698451 C34.0385226,40.2866784 32.1910211,42 29.9678833,42 L18.0321167,42 C15.8089789,42 13.9614774,40.2866784 13.7941692,38.0698451 L12.166,16.5 L11,16.5 C10.0818266,16.5 9.32880766,15.7928897 9.2558012,14.8935272 L9.25,14.75 C9.25,13.8318266 9.95711027,13.0788077 10.8564728,13.0058012 L11,13 L17.75,13 C17.75,9.70163274 20.305017,7.00002168 23.5438239,6.76639376 L23.7708731,6.75412198 L24,6.75 Z M27.75,19.75 C27.1027913,19.75 26.5704661,20.2418747 26.5064536,20.8721948 L26.5,21 L26.5,33 L26.5064536,33.1278052 C26.5704661,33.7581253 27.1027913,34.25 27.75,34.25 C28.3972087,34.25 28.9295339,33.7581253 28.9935464,33.1278052 L29,33 L29,21 L28.9935464,20.8721948 C28.9295339,20.2418747 28.3972087,19.75 27.75,19.75 Z M20.25,19.75 C19.6027913,19.75 19.0704661,20.2418747 19.0064536,20.8721948 L19,21 L19,33 L19.0064536,33.1278052 C19.0704661,33.7581253 19.6027913,34.25 20.25,34.25 C20.8972087,34.25 21.4295339,33.7581253 21.4935464,33.1278052 L21.5,33 L21.5,21 L21.4935464,20.8721948 C21.4295339,20.2418747 20.8972087,19.75 20.25,19.75 Z M24.1675223,10.2550188 L24,10.25 C22.5374682,10.25 21.3415957,11.3917046 21.2550188,12.8324777 L21.2500002,13.0010036 L26.7500002,13 C26.7500002,11.5374682 25.6082954,10.3415957 24.1675223,10.2550188 Z",
    },
  ];

  const dispatch = useDispatch();
  const isNavOpen = useSelector((states) => states.nav.isNavOpen);
  return (
    <div className=" relative sm:col-span-2 py-3 ps-2 pe-2 sm:pe-0 row-span-1 afterNav">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between sm:justify-center">
          <h1 className=" headFont font-medium text-white text-xl drop-shadow-md">
            Joy Box
          </h1>

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
              className=" sm:hidden "
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
        <div className=" hidden sm:block">
          <ul>
            {NavData.map((item) => {
              return <NavItem navData={item} />;
            })}
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;

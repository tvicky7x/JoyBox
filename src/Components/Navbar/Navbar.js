import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavbarAction } from "../../Store/NavbarSlice";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

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
        <div className=" flex items-center justify-between sm:justify-center">
          <h1 className="headFont font-medium text-white opacity-90 text-xl">
            Joy Box
          </h1>

          {!isNavOpen && (
            <button
              className=" sm:hidden"
              onClick={() => dispatch(NavbarAction.openNav())}
            >
              <svg
                viewBox="0 0 20 20"
                className=" w-7 h-7 stroke-white fill-white opacity-90"
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
                className=" w-6 h-6 stroke-white fill-white opacity-90"
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
              return <NavItem key={item.navName} navData={item} />;
            })}
          </ul>
        </div>
        <div className=" hidden  sm:flex items-center justify-center space-x-3">
          <NavLink
            to={"/settings"}
            className={({ isActive }) => {
              return isActive
                ? "fill-slate-950 opacity-90"
                : "fill-white opacity-90";
            }}
          >
            <svg
              className="w-5"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.9818 21.6364L21.7093 22.3948C22.0671 22.5518 22.4849 22.4657 22.7517 22.1799C23.9944 20.8492 24.9198 19.2536 25.4586 17.5131C25.5748 17.1376 25.441 16.7296 25.1251 16.4965L23.5988 15.3698C23.1628 15.0489 22.9 14.5403 22.9 13.9994C22.9 13.4586 23.1628 12.95 23.5978 12.6297L25.1228 11.5035C25.4386 11.2703 25.5723 10.8623 25.4561 10.487C24.9172 8.74611 23.9912 7.1504 22.7478 5.81991C22.4807 5.53405 22.0626 5.44818 21.7048 5.60568L19.9843 6.36294C19.769 6.45838 19.5385 6.507 19.3055 6.50663C18.4387 6.50572 17.7116 5.85221 17.617 4.98937L17.4079 3.11017C17.3643 2.71823 17.077 2.39734 16.6928 2.31149C15.8128 2.11485 14.9147 2.01047 14.0131 2.00006C13.0891 2.01071 12.19 2.11504 11.3089 2.31138C10.9245 2.39704 10.637 2.71803 10.5933 3.11017L10.3844 4.98794C10.3244 5.52527 10.0133 6.00264 9.54617 6.27415C9.07696 6.54881 8.50793 6.58168 8.01296 6.36404L6.29276 5.60691C5.93492 5.44941 5.51684 5.53528 5.24971 5.82114C4.00637 7.15163 3.08038 8.74734 2.54142 10.4882C2.42513 10.8638 2.55914 11.272 2.87529 11.5051L4.40162 12.6306C4.83721 12.9512 5.09414 13.4598 5.09414 14.0007C5.09414 14.5415 4.83721 15.0501 4.40219 15.3703L2.8749 16.4977C2.55922 16.7307 2.42533 17.1384 2.54122 17.5137C3.07924 19.2561 4.00474 20.8536 5.24806 22.1859C5.51493 22.4718 5.93281 22.558 6.29071 22.4009L8.01859 21.6424C8.51117 21.4269 9.07783 21.4586 9.54452 21.7281C10.0112 21.9976 10.3225 22.4731 10.3834 23.0093L10.5908 24.8855C10.6336 25.273 10.9148 25.5917 11.2933 25.682C13.0725 26.1061 14.9263 26.1061 16.7055 25.682C17.084 25.5917 17.3651 25.273 17.408 24.8855L17.6157 23.0066C17.675 22.4693 17.9729 21.9924 18.44 21.7219C18.9071 21.4515 19.4876 21.4197 19.9818 21.6364ZM14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18Z" />
            </svg>
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => {
              return isActive
                ? "fill-slate-950 opacity-90"
                : "fill-white opacity-90";
            }}
          >
            <svg
              className="w-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z"></path>
            </svg>
          </NavLink>
          <button>
            <svg
              className="w-5 -rotate-90 fill-white opacity-90"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.8823373,6.00767363 L11.998958,6.00094481 C12.5117938,6.00094481 12.9344939,6.38692078 12.992296,6.88425029 L12.9990324,7.00087033 L12.999,17.582 L16.2934123,14.2888627 C16.6538827,13.9283652 17.2211128,13.9006145 17.6134154,14.2056247 L17.7076258,14.2888098 C18.0681233,14.6492803 18.095874,15.2165103 17.7908638,15.6088129 L17.7076787,15.7030234 L12.7114396,20.699636 C12.6042163,20.8068673 12.4786949,20.88466 12.3449223,20.9330097 L12.3324451,20.9359835 L12.3324451,20.9359835 L12.2918955,20.9503331 L12.2918955,20.9503331 L12.2107276,20.970325 C12.1878709,20.9759277 12.1652052,20.9798676 12.1424516,20.9830238 L12.0337485,20.9921248 L12.0337485,20.9921248 L11.9668247,20.9921248 L11.9668247,20.9921248 L11.8501071,20.9813875 L11.8501071,20.9813875 L11.8111714,20.9738331 L11.8111714,20.9738331 C11.6360828,20.9410903 11.4772054,20.8621232 11.3473956,20.7502527 L6.2929305,15.7036321 C5.90208462,15.3134296 5.90156303,14.6802648 6.29176547,14.289419 C6.65195235,13.9286382 7.21916037,13.9004414 7.61170272,14.205143 L7.70597856,14.288254 L10.999,17.576 L10.9990324,7.00101928 C10.9989942,6.48818344 11.385003,6.06544791 11.8823373,6.00767363 L11.998958,6.00094481 L11.8823373,6.00767363 Z M4.25,3 L19.7480649,3 C20.9389289,3 21.9137098,3.92516159 21.9928741,5.09595119 L21.9980649,5.25 L21.9980649,16.754591 C21.9980649,17.945455 21.0729033,18.9202359 19.9021137,18.9994002 L19.7480649,19.004591 L18.7485826,19.004591 C18.334369,19.004591 17.9985826,18.6688046 17.9985826,18.254591 C17.9985826,17.8748952 18.2807365,17.5611 18.646812,17.5114376 L18.7485826,17.504591 L19.7480649,17.504591 C20.1277606,17.504591 20.4415558,17.2224371 20.4912183,16.8563616 L20.4980649,16.754591 L20.4980649,5.25 C20.4980649,4.87030423 20.215911,4.55650904 19.8498354,4.50684662 L19.7480649,4.5 L4.25,4.5 C3.87030423,4.5 3.55650904,4.78215388 3.50684662,5.14822944 L3.5,5.25 L3.5,16.754591 C3.5,17.1342868 3.78215388,17.448082 4.14822944,17.4977444 L4.25,17.504591 L5.25,17.504591 C5.66421356,17.504591 6,17.8403774 6,18.254591 C6,18.6342868 5.71784612,18.948082 5.35177056,18.9977444 L5.25,19.004591 L4.25,19.004591 C3.05913601,19.004591 2.08435508,18.0794294 2.00519081,16.9086398 L2,16.754591 L2,5.25 C2,4.05913601 2.92516159,3.08435508 4.09595119,3.00519081 L4.25,3 L19.7480649,3 L4.25,3 Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

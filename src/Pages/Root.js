import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainContainer from "../Components/Container/MainContainer";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../Store/GeneralSlice";
import ComposeFixButton from "../Components/Container/ComposeFixButton";
import ComposeBox from "../Components/Compose/ComposeBox";
import NotificationCompose from "../Components/Compose/NotificationCompose";
import MailRead from "../Components/Read/MailRead";
import logo from "../Assets/Logo/orignal joybox.png";

function Root() {
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const isNavOpen = useSelector((states) => states.general.isNavOpen);
  const isReading = useSelector((states) => states.general.isReading);
  const isComposing = useSelector((states) => states.general.isComposing);
  const editorStartContent = useSelector(
    (states) => states.general.editorStartContent
  );

  useEffect(() => {
    dispatch(GeneralAction.closeLoading());
  }, [dispatch]);

  if (!userInfo.emailVerified) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <>
      <MainContainer>
        {isComposing && <ComposeBox />}
        {editorStartContent.mini && <NotificationCompose />}

        <Navbar />
        <div
          className={`relative p-3 grid grid-rows-20 h-full overflow-hidden bg-white bg-opacity-60  ${
            isReading
              ? "hidden sm:grid"
              : isNavOpen
              ? "col-span-6"
              : "col-span-10"
          }  sm:col-span-5`}
        >
          <Outlet />
        </div>
        <div className="hidden relative p-2  h-full overflow-hidden col-span-5 bg-white bg-opacity-70 rounded-e-lg sm:grid grid-rows-12">
          {!isReading && (
            <div className=" text-slate-800 text-opacity-95 group hover:text-opacity-100 row-start-5 row-span-4 flex flex-col justify-center items-center  p-2 mx-auto">
              <img
                className="w-16 h-16 opacity-[0.85] group-hover:opacity-95"
                src={logo}
                alt=""
              />
              <p className=" mt-1 headFont text-xl font-medium">JoyBox</p>
              <p className=" -mt-1 font-medium">Bring Joy to you Inbox</p>
              <div className=" text-slate-500 mt-2.5 font-medium text-sm flex space-x-2 items-center justify-center">
                <p className=" hover:text-blue-800 hover:font-semibold">
                  Discord
                </p>
                <span> | </span>
                <p className=" hover:text-blue-800 hover:font-semibold">
                  Twitter
                </p>
                <span> | </span>
                <p className=" hover:text-blue-800 hover:font-semibold">
                  GitHub
                </p>
              </div>
            </div>
          )}

          {isReading && <MailRead />}
        </div>
        {isReading && (
          <div className="sm:hidden relative p-2  h-full overflow-hidden col-span-12 bg-white bg-opacity-70 rounded-lg grid grid-rows-12">
            <MailRead />
          </div>
        )}
      </MainContainer>
      {!isComposing && <ComposeFixButton />}
    </>
  );
}

export default Root;

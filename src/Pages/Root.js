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
        <div className="hidden relative p-2 editorCorner col-span-5 bg-white bg-opacity-75 rounded-lg sm:grid grid-rows-12">
          {isReading && <MailRead />}
        </div>
        {isReading && (
          <div className="sm:hidden relative p-2 editorCorner col-span-12 bg-white bg-opacity-75 rounded-lg grid grid-rows-12">
            <MailRead />
          </div>
        )}
      </MainContainer>
      {!isComposing && <ComposeFixButton />}
    </>
  );
}

export default Root;

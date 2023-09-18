import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainContainer from "../Components/Container/MainContainer";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../Store/GeneralSlice";
import ComposeFixButton from "../Components/Container/ComposeFixButton";

function Root() {
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const isNavOpen = useSelector((states) => states.general.isNavOpen);
  const isComposing = useSelector((states) => states.general.isComposing);

  useEffect(() => {
    dispatch(GeneralAction.closeLoading());
  }, [dispatch]);

  if (!userInfo.emailVerified) {
    return <Navigate to={"/auth"} />;
  }

  return (
    <>
      <MainContainer>
        <Navbar />
        <div
          className={`relative bg-white bg-opacity-70  ${
            isComposing
              ? "hidden sm:block"
              : isNavOpen
              ? "col-span-6"
              : "col-span-10"
          }  ${isComposing ? "sm:col-span-4" : "sm:col-span-10"} `}
        >
          <Outlet />
        </div>
        {isComposing && (
          <div className=" relative editorCorner col-span-12 sm:col-span-6 bg-white rounded-lg"></div>
        )}
      </MainContainer>
      <ComposeFixButton />
    </>
  );
}

export default Root;

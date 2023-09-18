import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import MainContainer from "../Components/Container/MainContainer";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../Store/GeneralSlice";

function Root() {
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const isNavOpen = useSelector((states) => states.nav.isNavOpen);

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
            isNavOpen ? "col-start-7" : "col-start-3"
          } sm:col-start-3  col-span-full rounded-e-lg`}
        >
          <Outlet />
          <Link to={"/auth"}>Test</Link>
        </div>
      </MainContainer>
    </>
  );
}

export default Root;

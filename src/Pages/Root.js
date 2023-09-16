import React from "react";
import { Link, Outlet } from "react-router-dom";
import MainContainer from "../Components/Container/MainContainer";
import Navbar from "../Components/Navbar/Navbar";

function Root() {
  return (
    <>
      <MainContainer>
        <Navbar />
        <div className=" relative bg-white bg-opacity-40 sm:col-start-3 sm:col-span-full row-span-full row-start-2 sm:rounded-none rounded-lg">
          <Outlet />
          <Link to={"/auth"}>Test</Link>
        </div>
      </MainContainer>
    </>
  );
}

export default Root;

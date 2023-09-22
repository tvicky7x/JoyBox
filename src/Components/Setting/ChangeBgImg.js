import React from "react";

function ChangeBgImg({ data }) {
  return (
    <div className="">
      <img className=" w-52" src={data.bgUrl} alt="" />
    </div>
  );
}

export default ChangeBgImg;

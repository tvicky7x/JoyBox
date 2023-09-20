import React from "react";
import { useDispatch } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";

function MailRead() {
  const dispatch = useDispatch();

  return (
    <>
      <div className=" relative row-span-1 flex justify-center items-center">
        <button
          onClick={() => dispatch(GeneralAction.closeReading())}
          className=" absolute right-0 hover:stroke-blue-700 hover:fill-blue-700 stroke-blue-600 fill-blue-600  p-1 rounded transition-colors duration-300"
        >
          <svg
            viewBox="0 0 28 28"
            className=" w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
          </svg>
        </button>
        <p className="text-blue-600 headFont text-lg">Read Mail</p>
      </div>
      <div className=" text-slate-950 row-start-2  flex flex-col justify-start row-span-full p-3 bg-white border rounded-lg "></div>
    </>
  );
}

export default MailRead;

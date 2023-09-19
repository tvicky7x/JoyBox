import React from "react";
import { useDispatch } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";

function NotificationCompose() {
  const dispatch = useDispatch();

  return (
    <div className="absolute  bottom-0 left-1/2 -translate-x-1/2 z-50">
      <div className=" relative sm:w-56 w-40 bg-slate-900 px-2 py-1.5 rounded-t-md flex items-center justify-start">
        <p className="headFont text-slate-200 text-sm sm:text-base">
          New Massage
        </p>
        <button
          className="ms-auto"
          onClick={() => dispatch(GeneralAction.openComposing())}
        >
          <svg
            className=" sm:w-4 sm:h-4 w-3 h-3 stroke-slate-200 fill-slate-200 hover:stroke-white hover:fill-white"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.5,3 L24,3 C24.5128358,3 24.9355072,3.38604019 24.9932723,3.88337887 L25,4 L25,11.5 C25,12.0522847 24.5522847,12.5 24,12.5 C23.4871642,12.5 23.0644928,12.1139598 23.0067277,11.6166211 L23,11.5 L23,6.414 L6.414,23 L11.5,23 C12.0128358,23 12.4355072,23.3860402 12.4932723,23.8833789 L12.5,24 C12.5,24.5128358 12.1139598,24.9355072 11.6166211,24.9932723 L11.5,25 L4,25 C3.48716416,25 3.06449284,24.6139598 3.00672773,24.1166211 L3,24 L3,16.5 C3,15.9477153 3.44771525,15.5 4,15.5 C4.51283584,15.5 4.93550716,15.8860402 4.99327227,16.3833789 L5,16.5 L5,21.585 L21.585,5 L16.5,5 C15.9871642,5 15.5644928,4.61395981 15.5067277,4.11662113 L15.5,4 C15.5,3.48716416 15.8860402,3.06449284 16.3833789,3.00672773 L16.5,3 L24,3 L16.5,3 Z"></path>
          </svg>
        </button>
        <button
          className="sm:ms-3 ms-2"
          onClick={() => dispatch(GeneralAction.deletingComposing())}
        >
          <svg
            viewBox="0 0 28 28"
            className=" sm:w-4 sm:h-4 w-3 h-3 stroke-slate-200 fill-slate-200 hover:stroke-white hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NotificationCompose;

import React from "react";
import { useDispatch } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";
import HTMLReactParser from "html-react-parser";

function MailDraft({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => dispatch(GeneralAction.openComposingDraft({ data }))}
        className={` bg-opacity-80 bg-white  hover:bg-opacity-95 transition-all duration-100 mb-2.5 max-h-28 overflow-hidden drop-shadow-xl rounded-md py-1 px-2`}
      >
        <div className=" flex justify-between h-full overflow-hidden">
          <div className=" w-full overflow-hidden">
            <div className=" flex items-center justify-start space-x-1">
              {/* <svg
                className={`w-5 h-5  fill-slate-800 opacity-30 shrink-0`}
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.78963301,2.77233335 L24.8609339,12.8499121 C25.4837277,13.1477699 25.7471402,13.8941055 25.4492823,14.5168992 C25.326107,14.7744476 25.1184823,14.9820723 24.8609339,15.1052476 L3.78963301,25.1828263 C3.16683929,25.4806842 2.42050372,25.2172716 2.12264586,24.5944779 C1.99321184,24.3238431 1.96542524,24.015685 2.04435886,23.7262618 L4.15190935,15.9983421 C4.204709,15.8047375 4.36814355,15.6614577 4.56699265,15.634447 L14.7775879,14.2474874 C14.8655834,14.2349166 14.938494,14.177091 14.9721837,14.0981464 L14.9897199,14.0353553 C15.0064567,13.9181981 14.9390703,13.8084248 14.8334007,13.7671556 L14.7775879,13.7525126 L4.57894108,12.3655968 C4.38011873,12.3385589 4.21671819,12.1952832 4.16392965,12.0016992 L2.04435886,4.22889788 C1.8627142,3.56286745 2.25538645,2.87569101 2.92141688,2.69404635 C3.21084015,2.61511273 3.51899823,2.64289932 3.78963301,2.77233335 Z"></path>
              </svg> */}
              <svg
                className={`w-5 h-5  fill-slate-800 opacity-30 shrink-0`}
                viewBox="0 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6,2 L13.5,2 C13.7453333,2 13.9495802,2.17698765 13.9919396,2.41016187 L14,2.5 L14,10 C14,11.0538182 14.8163967,11.9181157 15.8508084,11.9945109 L16,12 L23.5,12 C23.7453333,12 23.9495802,12.1769877 23.9919396,12.4101619 L24,12.5 L24,24 C24,25.0538182 23.1836033,25.9181157 22.1491916,25.9945109 L22,26 L6,26 C4.94618182,26 4.0818843,25.1836033 4.00548911,24.1491916 L4,24 L4,4 C4,2.94618182 4.81639669,2.0818843 5.85080841,2.00548911 L6,2 L13.5,2 L6,2 Z M15.5,10 L15.5,2.862 C15.5,2.745625 15.6232656,2.67901562 15.7177246,2.72782422 L15.756,2.756 L23.244,10.244 C23.327125,10.327125 23.2854531,10.4607812 23.1846367,10.4928965 L23.138,10.5 L16,10.5 C15.7546667,10.5 15.5504198,10.3230123 15.5080604,10.0898381 L15.5,10 L15.5,2.862 L15.5,10 Z"></path>
              </svg>

              <h2 className=" headFont text-lg text-slate-900 h-7 overflow-hidden">
                {data.subject}
              </h2>
            </div>
            <p className=" text-slate-800 -mt-1 text-sm h-5 overflow-hidden">
              {data.to}
            </p>
            <div className=" max-h-12 text-xs text-slate-600 text-opacity-80 mt-1.5">
              {HTMLReactParser(data.content)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailDraft;

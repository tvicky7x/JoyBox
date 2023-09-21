import React from "react";
import { useDispatch } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";
import HTMLReactParser from "html-react-parser";

function MailList({ data, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={() => {
          dispatch(GeneralAction.openReadingIndex({ index }));
        }}
        className={` ${
          data.isRead ? "bg-opacity-60" : "bg-opacity-95"
        } bg-white  hover:bg-opacity-95 transition-all duration-100 mb-2.5 max-h-28 overflow-hidden drop-shadow-xl rounded-md py-1 px-2`}
      >
        <div className=" flex justify-between h-full overflow-hidden">
          <div className=" w-full overflow-hidden">
            <div className=" flex items-center justify-start space-x-1">
              {data.isRead ? (
                <>
                  <svg
                    className="w-5 h-5 fill-slate-800 shrink-0 opacity-30"
                    viewBox="0 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.05044915,18.573209 L23.363135,28.8255942 C23.7558709,29.0581353 24.2441291,29.0581353 24.636865,28.8255942 L41.9496913,18.5742154 C41.9829518,18.8127403 42,19.055137 42,19.2999516 L42,34.75 C42,37.0972102 40.0972102,39 37.75,39 L10.25,39 C7.90278981,39 6,37.0972102 6,34.75 L6,19.2999516 C6,19.0547927 6.01709622,18.8120585 6.05044915,18.573209 Z M24.628836,6.16969203 L39.3911111,14.7626582 C40.0370009,15.1386238 40.5834936,15.6405582 41.0068075,16.2271009 L24,26.2973146 L6.99319251,16.2271009 C7.41650642,15.6405582 7.96299914,15.1386238 8.60888888,14.7626582 L23.371164,6.16969203 C23.7598603,5.94343599 24.2401397,5.94343599 24.628836,6.16969203 Z"></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="w-7 h-7 -mx-1  fill-blue-500 shrink-0 opacity-70"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z" />
                  </svg>
                </>
              )}

              <h2 className=" headFont text-lg text-slate-900 h-7 overflow-hidden">
                {data.editorContent.subject}
              </h2>
            </div>
            <p className=" text-slate-800 -mt-1 text-sm h-5 overflow-hidden">
              {data.from}
            </p>
            <div className=" max-h-12 text-xs text-slate-600 text-opacity-80 mt-1.5">
              {HTMLReactParser(data.editorContent.content)}
            </div>
          </div>
          <div className=" shrink-0 flex flex-col justify-between pt-1">
            <svg
              className={`${
                data.isFavorite
                  ? "fill-yellow-400 "
                  : "fill-slate-700 opacity-30 "
              } w-5 h-5  `}
              viewBox="0 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailList;

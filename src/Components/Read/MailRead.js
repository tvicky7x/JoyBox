import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";
import HTMLReactParser from "html-react-parser";
import { updateMails } from "../../Store/MailAction";
import { useLocation } from "react-router-dom";

function MailRead() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userInfo = useSelector((states) => states.auth.userInfo);
  const readingIndex = useSelector((states) => states.general.readingIndex);
  const sentMails = useSelector((states) => states.mail.sentMails);
  const inboxMails = useSelector((states) => states.mail.inboxMails);

  let readingContent;
  if (location.pathname === "/sent") {
    readingContent = sentMails[readingIndex][1];
  } else {
    readingContent = inboxMails[readingIndex][1];
  }

  useEffect(() => {
    if (!readingContent.isRead) {
      if (location.pathname === "/sent") {
        dispatch(
          updateMails(readingContent, userInfo.networkEmail, "hasOpen", "sent")
        );
      } else {
        dispatch(updateMails(readingContent, userInfo.networkEmail, "hasOpen"));
      }
    }
  }, [readingContent, userInfo.networkEmail, dispatch, location.pathname]);

  return (
    <>
      <div className=" relative row-span-1 flex justify-center items-center">
        <div className="absolute flex  right-0 items-center space-x-1">
          {location.pathname === "/sent" ? (
            <></>
          ) : (
            <button
              onClick={() => {
                dispatch(
                  updateMails(readingContent, userInfo.networkEmail, "trash")
                );
                dispatch(GeneralAction.closeReading());
              }}
              className="  hover:fill-blue-900  fill-blue-800 p-1 "
            >
              <svg
                className="  w-6 h-6 -mt-0.5"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24,6.75 C27.3750735,6.75 30.1253119,9.4252368 30.245878,12.7708731 L30.25,13.0010013 L37,13 C37.9664983,13 38.75,13.7835017 38.75,14.75 C38.75,15.6681734 38.0428897,16.4211923 37.1435272,16.4941988 L37,16.5 L35.833,16.5 L34.2058308,38.0698451 C34.0385226,40.2866784 32.1910211,42 29.9678833,42 L18.0321167,42 C15.8089789,42 13.9614774,40.2866784 13.7941692,38.0698451 L12.166,16.5 L11,16.5 C10.0818266,16.5 9.32880766,15.7928897 9.2558012,14.8935272 L9.25,14.75 C9.25,13.8318266 9.95711027,13.0788077 10.8564728,13.0058012 L11,13 L17.75,13 C17.75,9.70163274 20.305017,7.00002168 23.5438239,6.76639376 L23.7708731,6.75412198 L24,6.75 Z M27.75,19.75 C27.1027913,19.75 26.5704661,20.2418747 26.5064536,20.8721948 L26.5,21 L26.5,33 L26.5064536,33.1278052 C26.5704661,33.7581253 27.1027913,34.25 27.75,34.25 C28.3972087,34.25 28.9295339,33.7581253 28.9935464,33.1278052 L29,33 L29,21 L28.9935464,20.8721948 C28.9295339,20.2418747 28.3972087,19.75 27.75,19.75 Z M20.25,19.75 C19.6027913,19.75 19.0704661,20.2418747 19.0064536,20.8721948 L19,21 L19,33 L19.0064536,33.1278052 C19.0704661,33.7581253 19.6027913,34.25 20.25,34.25 C20.8972087,34.25 21.4295339,33.7581253 21.4935464,33.1278052 L21.5,33 L21.5,21 L21.4935464,20.8721948 C21.4295339,20.2418747 20.8972087,19.75 20.25,19.75 Z M24.1675223,10.2550188 L24,10.25 C22.5374682,10.25 21.3415957,11.3917046 21.2550188,12.8324777 L21.2500002,13.0010036 L26.7500002,13 C26.7500002,11.5374682 25.6082954,10.3415957 24.1675223,10.2550188 Z"></path>
              </svg>
            </button>
          )}

          <button
            onClick={() => dispatch(GeneralAction.closeReading())}
            className="  hover:stroke-blue-900 hover:fill-blue-900 stroke-blue-800 fill-blue-800 p-1 "
          >
            <svg
              viewBox="0 0 28 28"
              className=" w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
            </svg>
          </button>
        </div>

        <p className="text-blue-800 headFont text-lg">Read Mail</p>
      </div>
      <div className=" row-start-2 p-2 row-span-full h-full overflow-hidden bg-white rounded-lg ">
        <div className=" h-full overflow-y-scroll">
          <div className=" mb-2 flex items-start justify-between space-x-2">
            <h2 className="text-xl font-semibold">
              {readingContent.editorContent.subject}
            </h2>
            {location.pathname === "/sent" ? (
              <></>
            ) : (
              <div className=" shrink-0 mt-1">
                <button
                  onClick={() => {
                    dispatch(
                      updateMails(
                        readingContent,
                        userInfo.networkEmail,
                        "favorite"
                      )
                    );
                  }}
                >
                  <svg
                    className={`${
                      readingContent.isFavorite
                        ? "fill-yellow-300"
                        : "fill-slate-700 opacity-30 hover: hover:opacity-100"
                    } w-5 h-5  `}
                    viewBox="0 0 28 28"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-start space-x-2 mb-7">
            <img
              className=" w-14 h-14 drop-shadow-sm rounded-full object-cover"
              src={`${window.location.origin}${readingContent.senderInfo.photoUrl}`}
              alt=""
              onError={(e) =>
                (e.target.src = readingContent.senderInfo.photoUrl)
              }
            />
            <div>
              <p className=" text-slate-900 text-opacity-95 font-medium capitalize">
                {readingContent.senderInfo.name}
              </p>
              <p className=" text-sm -mt-1">
                to {readingContent.editorContent.to}
              </p>
            </div>
          </div>
          <div className="text-slate-900">
            {HTMLReactParser(readingContent.editorContent.content)}
          </div>
          <div className=" flex items-center justify-center space-x-2 mt-2">
            <hr className="w-full border" />
            <p className=" text-slate-400 font-light text-xs">END</p>
            <hr className="w-full border" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MailRead;

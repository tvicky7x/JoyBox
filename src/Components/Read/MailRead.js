import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";

function MailRead() {
  const dispatch = useDispatch();
  const readingContent = useSelector((states) => states.general.readingContent);

  return (
    <>
      <div className=" relative row-span-1 flex justify-center items-center">
        <button
          onClick={() => dispatch(GeneralAction.closeReading())}
          className=" absolute right-0 hover:stroke-blue-900 hover:fill-blue-900 stroke-blue-800 fill-blue-800  p-1 rounded transition-colors duration-300"
        >
          <svg
            viewBox="0 0 28 28"
            className=" w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
          </svg>
        </button>
        <p className="text-blue-800 headFont text-lg">Read Mail</p>
      </div>
      <div className=" row-start-2 p-2 row-span-full h-full overflow-hidden bg-white rounded-lg ">
        <div className=" h-full overflow-y-scroll">
          <div className=" mb-2 flex items-start justify-between space-x-3">
            <h2 className="text-xl font-semibold">
              {readingContent.editorContent.subject}
            </h2>
            <div className=" shrink-0 ">
              <button>
                <svg
                  className=" w-5 h-5 fill-slate-700 opacity-30 hover:fill-yellow-400 hover:opacity-100"
                  viewBox="0 0 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4373398,3.10348696 C14.6345524,3.20081719 14.7941799,3.36044472 14.8915102,3.55765732 L17.8153782,9.48206111 L24.353346,10.4320834 C24.8998908,10.511501 25.2785723,11.0189439 25.1991547,11.5654888 C25.1675302,11.7831258 25.065043,11.9842682 24.9075593,12.1377768 L20.1766414,16.749282 L21.2934597,23.2608319 C21.3868207,23.8051684 21.0212328,24.3221243 20.4768964,24.4154853 C20.2601388,24.4526621 20.0371707,24.4173475 19.8425102,24.3150084 L13.9947741,21.2406716 L8.14703796,24.3150084 C7.65819337,24.5720092 7.05356621,24.3840627 6.79656541,23.8952181 C6.69422634,23.7005576 6.65891166,23.4775895 6.69608851,23.2608319 L7.81290673,16.749282 L3.08198882,12.1377768 C2.68650524,11.7522756 2.67841294,11.1191623 3.06391415,10.7236788 C3.21742275,10.5661951 3.41856517,10.4637079 3.6362022,10.4320834 L10.1741699,9.48206111 L13.098038,3.55765732 C13.3424603,3.06240366 13.9420861,2.85906466 14.4373398,3.10348696 Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            className=" w-2 h-2 rounded-full"
            src={readingContent.senderInfo.photoUrl}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default MailRead;

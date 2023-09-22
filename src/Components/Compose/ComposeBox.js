import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ButtonPrimary from "../Container/ButtonPrimary";
import ButtonSecondary from "../Container/ButtonSecondary";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";
import { deleteMails, saveDraft, sendMail } from "../../Store/MailAction";

function ComposeBox() {
  const dispatch = useDispatch();
  const editorStartContent = useSelector(
    (states) => states.general.editorStartContent
  );
  const editorContent = useSelector((states) => states.general.editorContent);
  const userInfo = useSelector((states) => states.auth.userInfo);

  const mailInput = useRef();

  return (
    <div
      className="fixed w-full h-full z-[100] flex items-center justify-center modalClose"
      onClick={(e) => {
        e.target.classList.contains("modalClose") &&
          dispatch(GeneralAction.closeComposing());
      }}
    >
      <div className="sm:w-96 w-72  rounded-md overflow-hidden">
        <div className=" bg-slate-900 px-1 py-1.5 flex items-center justify-center relative">
          <div className=" absolute right-0 flex items-center space-x-2.5 pe-1">
            {editorStartContent.draftId && (
              <button
                onClick={() => {
                  dispatch(
                    deleteMails(editorContent, userInfo.networkEmail, "drafts")
                  );
                  dispatch(GeneralAction.deletingComposing());
                }}
              >
                <svg
                  className="  w-5 h-5  fill-slate-200  hover:fill-white "
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24,6.75 C27.3750735,6.75 30.1253119,9.4252368 30.245878,12.7708731 L30.25,13.0010013 L37,13 C37.9664983,13 38.75,13.7835017 38.75,14.75 C38.75,15.6681734 38.0428897,16.4211923 37.1435272,16.4941988 L37,16.5 L35.833,16.5 L34.2058308,38.0698451 C34.0385226,40.2866784 32.1910211,42 29.9678833,42 L18.0321167,42 C15.8089789,42 13.9614774,40.2866784 13.7941692,38.0698451 L12.166,16.5 L11,16.5 C10.0818266,16.5 9.32880766,15.7928897 9.2558012,14.8935272 L9.25,14.75 C9.25,13.8318266 9.95711027,13.0788077 10.8564728,13.0058012 L11,13 L17.75,13 C17.75,9.70163274 20.305017,7.00002168 23.5438239,6.76639376 L23.7708731,6.75412198 L24,6.75 Z M27.75,19.75 C27.1027913,19.75 26.5704661,20.2418747 26.5064536,20.8721948 L26.5,21 L26.5,33 L26.5064536,33.1278052 C26.5704661,33.7581253 27.1027913,34.25 27.75,34.25 C28.3972087,34.25 28.9295339,33.7581253 28.9935464,33.1278052 L29,33 L29,21 L28.9935464,20.8721948 C28.9295339,20.2418747 28.3972087,19.75 27.75,19.75 Z M20.25,19.75 C19.6027913,19.75 19.0704661,20.2418747 19.0064536,20.8721948 L19,21 L19,33 L19.0064536,33.1278052 C19.0704661,33.7581253 19.6027913,34.25 20.25,34.25 C20.8972087,34.25 21.4295339,33.7581253 21.4935464,33.1278052 L21.5,33 L21.5,21 L21.4935464,20.8721948 C21.4295339,20.2418747 20.8972087,19.75 20.25,19.75 Z M24.1675223,10.2550188 L24,10.25 C22.5374682,10.25 21.3415957,11.3917046 21.2550188,12.8324777 L21.2500002,13.0010036 L26.7500002,13 C26.7500002,11.5374682 25.6082954,10.3415957 24.1675223,10.2550188 Z"></path>
                </svg>
              </button>
            )}
            <button onClick={() => dispatch(GeneralAction.closeComposing())}>
              <svg
                className=" w-4 h-4 stroke-slate-200 fill-slate-200 hover:stroke-white hover:fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.99649162,13 L20,13 C20.5522847,13 21,12.5522847 21,12 C21,11.4477153 20.5522847,11 20,11 L3.99649162,11 C3.44420687,11 2.99649162,11.4477153 2.99649162,12 C2.99649162,12.5522847 3.44420687,13 3.99649162,13 Z"></path>
              </svg>
            </button>
            <button onClick={() => dispatch(GeneralAction.deletingComposing())}>
              <svg
                viewBox="0 0 28 28"
                className=" w-4 h-4 stroke-slate-200 fill-slate-200 hover:stroke-white hover:fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.52499419,3.71761187 L3.61611652,3.61611652 C4.0717282,3.16050485 4.79154862,3.13013074 5.28238813,3.52499419 L5.38388348,3.61611652 L14,12.233 L22.6161165,3.61611652 C23.1042719,3.12796116 23.8957281,3.12796116 24.3838835,3.61611652 C24.8720388,4.10427189 24.8720388,4.89572811 24.3838835,5.38388348 L15.767,14 L24.3838835,22.6161165 C24.8394952,23.0717282 24.8698693,23.7915486 24.4750058,24.2823881 L24.3838835,24.3838835 C23.9282718,24.8394952 23.2084514,24.8698693 22.7176119,24.4750058 L22.6161165,24.3838835 L14,15.767 L5.38388348,24.3838835 C4.89572811,24.8720388 4.10427189,24.8720388 3.61611652,24.3838835 C3.12796116,23.8957281 3.12796116,23.1042719 3.61611652,22.6161165 L12.233,14 L3.61611652,5.38388348 C3.16050485,4.9282718 3.13013074,4.20845138 3.52499419,3.71761187 L3.61611652,3.61611652 L3.52499419,3.71761187 Z"></path>
              </svg>
            </button>
          </div>
          <p className="headFont text-slate-200">New Massage</p>
        </div>

        <div className="bg-white p-2 border-x-2 border-b-2 ">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                sendMail({
                  editorContent,
                  senderEmail: userInfo.email,
                  receiverEmail: mailInput.current.value.replace(
                    /[^a-z0-9A-Z]/gi,
                    ""
                  ),
                  networkEmail: userInfo.networkEmail,
                  senderInfo: {
                    name: userInfo.name,
                    photoUrl: userInfo.photoUrl,
                  },
                  draftId: editorStartContent.draftId,
                })
              );
            }}
          >
            <input
              ref={mailInput}
              required
              defaultValue={editorStartContent.to}
              onChange={(e) =>
                dispatch(
                  GeneralAction.changeEditorContent({
                    type: "to",
                    to: e.target.value,
                  })
                )
              }
              placeholder="To"
              className="w-full focus:outline-none font-medium"
              type="email"
            />
            <hr className="bg-slate-200 rounded-full mb-2 h-0.5 mt-1" />
            <textarea
              required
              defaultValue={editorStartContent.subject}
              onChange={(e) =>
                dispatch(
                  GeneralAction.changeEditorContent({
                    type: "subject",
                    subject: e.target.value,
                  })
                )
              }
              className=" max-h-12 w-full focus:outline-none font-medium"
              name=""
              id=""
              placeholder="Subject"
            ></textarea>
            <hr className="bg-slate-200 rounded-full h-0.5 mt-1" />
            <Editor
              apiKey="cws419pn8x9rtyjupr3it1k9dw1vgyhanqbgsrdij45angwq"
              initialValue={editorStartContent.content}
              onEditorChange={(content) =>
                dispatch(
                  GeneralAction.changeEditorContent({
                    type: "content",
                    content,
                  })
                )
              }
              init={{
                selector: "textarea",
                skin: "naked",
                icons: "small",
                content_css: "writer",
                statusbar: false,
                menubar: false,
                max_height: 280,
                autoresize_bottom_margin: 200,
                plugins: [
                  "codesample",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "media",
                  "emoticons",
                  "fullscreen",
                  "autoresize",
                ],
                toolbar:
                  "fullscreen | blocks | bold italic underline | forecolor bullist numlist align | emoticons link image media codesample",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}",
              }}
            />
            <div className="flex items-center justify-between">
              <ButtonSecondary
                onClick={() => {
                  dispatch(
                    saveDraft({
                      editorContent,
                      networkEmail: userInfo.networkEmail,
                      draftId: editorStartContent.draftId,
                    })
                  );
                }}
              >
                Save as draft
              </ButtonSecondary>
              <ButtonPrimary type="submit">Send</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComposeBox;

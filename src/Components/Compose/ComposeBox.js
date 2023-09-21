import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ButtonPrimary from "../Container/ButtonPrimary";
import ButtonSecondary from "../Container/ButtonSecondary";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";
import { saveDraft, sendMail } from "../../Store/MailAction";
// import HTMLReactParser from "html-react-parser";

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
      <div className="sm:w-96 w-72 ">
        <div className=" bg-slate-900 px-1 py-1.5 rounded-t-md flex items-center justify-center relative">
          <div className=" absolute right-0 flex items-center space-x-2.5 pe-1">
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

        <div className="bg-white p-2 rounded-b-md">
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
                  draftId: null,
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

          {/* <div>{HTMLReactParser(editorContent.content)}</div> */}
        </div>
      </div>
    </div>
  );
}

export default ComposeBox;

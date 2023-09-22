import React from "react";
import { useSelector } from "react-redux";
import MailDraft from "../Components/Mails/MailDraft";

function Drafts() {
  const draftsMails = useSelector((states) => states.mail.draftsMails);

  const set = new Set();
  let DateList = [];
  if (draftsMails) {
    draftsMails.forEach((item) => {
      set.add(new Date(item[1].date).toDateString());
    });
    DateList = Array.from(set);
  }

  return (
    <>
      <h1 className="headFont row-span-1 text-blue-800 text-xl">Drafts</h1>
      <div className=" row-span-full row-start-2 overflow-y-scroll">
        {DateList.map((item) => {
          return (
            <div key={item}>
              <p className=" text-slate-800 text-xs text-opacity-95 mb-1 ">
                {item}
              </p>
              {draftsMails
                .filter((list) => {
                  return new Date(list[1].date).toDateString() === item;
                })
                .map((data) => {
                  return (
                    <MailDraft key={data[0]} data={data[1].editorContent} />
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Drafts;

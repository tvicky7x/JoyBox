import React from "react";
import MailList from "../Components/Mails/MailList";
import { useSelector } from "react-redux";

function Favorite() {
  const favoriteMails = useSelector((states) => states.mail.favoriteMails);

  const set = new Set();
  let DateList = [];
  if (favoriteMails) {
    favoriteMails.forEach((item) => {
      set.add(new Date(item[1].date).toDateString());
    });
    DateList = Array.from(set);
  }

  return (
    <>
      <h1 className="headFont row-span-1 text-blue-800 text-xl">Favorite</h1>
      <div className=" row-span-full row-start-2 overflow-y-scroll">
        {DateList.map((item) => {
          return (
            <div key={item}>
              <p className=" text-slate-800 text-xs text-opacity-95 mb-1 ">
                {item}
              </p>
              {favoriteMails
                .filter((list) => {
                  return new Date(list[1].date).toDateString() === item;
                })
                .map((data) => {
                  return (
                    <MailList
                      key={data[0]}
                      data={data[1]}
                      index={favoriteMails.indexOf(data)}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favorite;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralAction } from "../../Store/GeneralSlice";

function ImageContainer() {
  const dispatch = useDispatch();
  const currentAvatar = useSelector((states) => states.general.currentAvatar);
  const empty = useSelector((states) => states.general.empty);
  return (
    <img
      className="ring-2 ring-blue-300 w-20 h-20 object-cover rounded-full"
      src={currentAvatar}
      alt=""
      onError={() => {
        dispatch(GeneralAction.changeAvatar({ avatar: empty }));
      }}
    />
  );
}

export default ImageContainer;

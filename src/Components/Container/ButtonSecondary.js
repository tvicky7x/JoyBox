import React from "react";

function ButtonSecondary({
  children,
  type = "button",
  onClick = () => {},
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-slate-200 py-1.5 px-3 font-medium rounded text-slate-600 hover:bg-slate-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;

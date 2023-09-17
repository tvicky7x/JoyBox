import React from "react";

function ButtonPrimary({
  children,
  type = "button",
  onClick = () => {},
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 py-1.5 px-3 font-medium rounded text-blue-50 hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;

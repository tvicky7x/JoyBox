import React from "react";

function ComposeFixButton() {
  return (
    <div className=" drop-shadow-lg fixed bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 bg-opacity-95 rounded-full">
      <svg
        className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M473.818,0.003c0,0-18.578,28.297-139.938,70.172c-123.719,42.688-199.875,216.406-199.875,216.406
		c-18.344,35.578-90.813,183.453-90.813,183.453c-19.953,38.172,16.625,60.734,38.063,21.313
		c41.156-75.703,67.688-144.875,130.25-146.844c91.219-2.875,153.609-84.109,133.984-80.359
		c-25.844,11.484-82.781,0.875-49.234-4.391c80.531-6.594,130.125-68.297,113.969-72.5c-28.563,11.219-55.172,0.578-60.391-2.656
		C491.959,166.987,473.818,0.003,473.818,0.003z"
        />
      </svg>
    </div>
  );
}

export default ComposeFixButton;

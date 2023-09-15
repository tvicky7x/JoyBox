import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      Navbar
      <Link to={"/sent"}>SENT</Link>
    </div>
  );
}

export default Navbar;

import React from "react";
import Image from "next/image";

function Popover({ children }) {
  return (
    <div
      className="popover absolute w-72 px-4 py-4 bg-white rounded-md shadow-md space-y-3"
    >
      {children}
    </div>
  );
}

export default Popover;

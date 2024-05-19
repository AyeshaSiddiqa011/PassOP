import React from "react";

function Footer() {
  return (
    <div
      className="bg-slate-800 text-white flex flex-col justify-center 
    items-center px-4 py-5 h-14 mycontainer sticky bottom-0 w-full"
    >
      <div className="logo font-bold text-white text-2xl ">
        <span className="text-green-700">&lt;</span>
        <span className="text-white">Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      </div>
    </div>
  );
}

export default Footer;

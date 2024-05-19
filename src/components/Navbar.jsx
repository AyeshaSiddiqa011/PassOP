import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white top-0 w-full ">
      <div className=" flex justify-between items-center px-4 py-5 h-14 mycontainer ">
        <div className="justify-between items-center flex logo font-bold text-white text-2xl">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-green-700 my-5 rounded-full flex gap-4 justify-between items-center ring-white ring-1">
          <img
            className=" invert p-1 w-10"
            src="icons/github.svg"
            alt="github"
          />
          <span className="font-bold px-2 \">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

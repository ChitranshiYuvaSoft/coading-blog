"use client";
import React from "react";

const Header = ({ title }) => {
  return (
    <div className="w-full py-3 px-4 flex items-center ml-5 justify-end shadow-lg mt-2">
      <div className="w-[90%] h-[4rem]">
      <h1 className="text-slate-100 text-2xl md:text-3xl lg:text-2xl font-bold truncate">
        {title}
      </h1>
      </div>
    </div>
  );
};

export default Header;

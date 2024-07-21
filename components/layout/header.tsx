import React from "react";
import HeaderCenter from "./sections/header-center";

const Header: React.FC = () => {
  return (
    <div className="h-[76px] w-full flex justify-center bg-white">
      <div className="max-w-[1600px] w-full h-full flex items-center justify-between bg-transparent px-6">
        <h2 className="w-[350px] text-lg text-black">Logo</h2>
        <HeaderCenter />
        <div className="w-[350px] h-[46px] text-black bg-red-600"></div>
      </div>
    </div>
  );
};

export default Header;

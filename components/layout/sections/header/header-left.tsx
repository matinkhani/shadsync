import Link from "next/link";
import React from "react";

const HeaderLeft = () => {
  return (
    <div className="w-[350px]">
      <Link href="/" className="text-lg text-black hover:text-gray-500">
        Logo
      </Link>
    </div>
  );
};

export default HeaderLeft;

import { STRING_CONSTANTS } from "@/constants/strings/string.constants";
import Link from "next/link";
import React from "react";

const HeaderLeft = () => {
  return (
    <div className="w-[350px]">
      <Link href="/" className="text-lg text-black hover:text-gray-500">
        {STRING_CONSTANTS.LOGO}
      </Link>
    </div>
  );
};

export default HeaderLeft;

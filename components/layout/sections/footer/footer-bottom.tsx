import React from "react";
import Image from "next/image";
import { IMG_CONSTANTS } from "@/constants/strings/img.constants";
import { STRING_CONSTANTS } from "@/constants/strings/string.constants";

const FooterBottom = () => {
  return (
    <div className="h-[54px] w-full flex items-center justify-between border-t border-t-gray-300">
      <div className="w-[269px] h-[18px] text-black text-sm">
        © {STRING_CONSTANTS.YEAR} - {STRING_CONSTANTS.STORE_NAME}.{" "}
        {STRING_CONSTANTS.ALL_RIGHTS_RESERVED}
      </div>
      <div className="w-[259px] h-6">
        <Image
          src={IMG_CONSTANTS.PAYMENT}
          width={259}
          height={24}
          alt={STRING_CONSTANTS.PAYMENT}
        />
      </div>
    </div>
  );
};

export default FooterBottom;

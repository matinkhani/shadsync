import React from "react";
import Image from "next/image";
import PaymentImg from "@/public/images/payment.png";

const FooterBottom = () => {
  return (
    <div className="h-[54px] w-full flex items-center justify-between border-t border-t-gray-300">
      <div className="w-[269px] h-[18px] text-black text-sm">
        © 2024 - Store Name. All Rights Reserved
      </div>
      <div className="w-[259px] h-6">
        <Image src={PaymentImg} alt="payment" />
      </div>
    </div>
  );
};

export default FooterBottom;

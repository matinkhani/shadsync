import React from "react";
import FooterBottom from "./sections/footer/footer-bottom";
import FooterTop from "./sections/footer/footer-top";

const Footer = () => {
  return (
    <div className="h-[351px] w-full flex justify-center bg-white text-black">
      <div className="max-w-[1340px] w-full h-full flex flex-col bg-transparent">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;

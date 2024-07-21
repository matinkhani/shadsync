"use client";
import React, { useState, useEffect, FC } from "react";
import HeaderCenter from "./sections/header-center";
import HeaderRight from "./sections/header-right";
import HeaderLeft from "./sections/header-left";

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // add event listener on mount
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      // remove event listener on unmount
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="h-[76px] w-full flex justify-center bg-white">
        <div className="max-w-[1600px] w-full h-full flex items-center justify-between bg-transparent px-6">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
      </div>
    </div>
  );
};

export default Header;

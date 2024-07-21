import React from "react";
import { Input } from "@/components/ui/input";
import UserIcon from "@/components/icons/user-icon";
import BagIcon from "@/components/icons/bag-icon";
import Link from "next/link";

const HeaderRight = () => {
  const isLoggedIn: boolean = true;

  return (
    <div className="w-[350px] h-[46px] flex items-center gap-8 text-black">
      <Input placeholder="Search" className="outline-none" />
      <Link href={isLoggedIn ? "/profile" : "/signin"}>
        <UserIcon />
      </Link>
      <Link href={isLoggedIn ? "/buy-list" : "/signin"}>
        <BagIcon />
      </Link>
    </div>
  );
};

export default HeaderRight;

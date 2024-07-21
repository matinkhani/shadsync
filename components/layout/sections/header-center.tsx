import React from "react";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import { MenuItems } from "@/constants/items/menu-header.items";
import {
  HeaderDropdownItemsI,
  HeaderMenuItemsT,
} from "@/types/menu-header.type";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderCenter: React.FC = () => {
  const isDropdown = (item: HeaderMenuItemsT): item is HeaderDropdownItemsI => {
    return (item as HeaderDropdownItemsI).dropdown !== undefined;
  };

  return (
    <div className="h-[18px] flex">
      <ul className="flex gap-8 w-full list-none">
        {MenuItems.map((item, index) => (
          <li key={index} className="relative group">
            {isDropdown(item) ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer outline-none">
                  {item.label}
                  <ArrowDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg">
                  {item.dropdown.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="block text-sm hover:bg-gray-100 w-full"
                      >
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={item.href} className="block hover:bg-gray-300">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderCenter;

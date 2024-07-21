import { HeaderMenuItemsT } from "@/types/menu-header.type";

export const MenuItems: HeaderMenuItemsT[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    dropdown: [
      { label: "Shop 1", href: "/shop-1" },
      { label: "Shop 2", href: "/shop-2" },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
];

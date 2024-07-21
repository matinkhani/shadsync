import React, { FC } from "react";
import Link from "next/link";
import {
  FooterContactInfoItems,
  FooterInformationItems,
  FooterSocialItems,
  FooterStoresItems,
} from "./constants/items/footer.items";

interface FooterColumnProps {
  title: string;
  items: { label: string; link: string }[];
}

const FooterColumn: FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-lg text-black">{title}</p>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-black text-sm hover:text-gray-500"
            aria-label={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterTop: FC = () => {
  return (
    <footer className="w-full py-20">
      <div className="container mx-auto flex flex-wrap justify-between gap-10">
        {/* Social Media */}
        <div className="flex flex-col gap-8">
          <p className="text-lg text-black">Social Media</p>
          <div className="flex gap-4">
            {FooterSocialItems.map((item, index) => (
              <Link href={item.link} key={index}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* Other Columns */}
        <FooterColumn title="Our Store" items={FooterStoresItems} />
        <FooterColumn title="Information" items={FooterInformationItems} />
        <FooterColumn title="Contact Info" items={FooterContactInfoItems} />
      </div>
    </footer>
  );
};

export default FooterTop;

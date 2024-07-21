import FacebookIcon from "@/components/icons/facebook-icon";
import {
  FooterContactInfoItemsI,
  FooterInformationItemsI,
  FooterSocialItemsI,
  FooterStoresItemsI,
} from "../../types/footer.type";
import InstagramIcon from "@/components/icons/instagram-icon";
import ThreadsIcon from "@/components/icons/threads-icon";
import TwitterIcon from "@/components/icons/twitter-icon";

export const FooterSocialItems: FooterSocialItemsI[] = [
  { name: "Facebook", link: "/", icon: <FacebookIcon /> },
  { name: "Instagram", link: "/", icon: <InstagramIcon /> },
  { name: "Threads", link: "/", icon: <ThreadsIcon /> },
  { name: "Twitter", link: "/", icon: <TwitterIcon /> },
];

export const FooterStoresItems: FooterStoresItemsI[] = [
  { label: "Home", link: "/" },
  { label: "All Collections", link: "/" },
  { label: "Shop All", link: "/" },
];

export const FooterInformationItems: FooterInformationItemsI[] = [
  { label: "Warranty Information", link: "/" },
  { label: "Privacy policy", link: "/" },
  { label: "Terms & conditions", link: "/" },
];

export const FooterContactInfoItems: FooterContactInfoItemsI[] = [
  { label: "info@example.com", link: "/" },
  { label: "123456789", link: "tel:123456789" },
];

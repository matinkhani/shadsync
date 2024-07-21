import { ReactNode } from "react";

export interface FooterSocialItemsI {
  icon: ReactNode;
  link: string;
  name: string;
}

export interface FooterStoresItemsI {
  link: string;
  label: string;
}

export interface FooterInformationItemsI extends FooterStoresItemsI {}

export interface FooterContactInfoItemsI extends FooterStoresItemsI {}

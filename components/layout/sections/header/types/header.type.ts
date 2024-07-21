export interface HeaderLinkI {
  label: string;
  href: string;
}

export interface HeaderDropdownItemsI {
  label: string;
  dropdown: HeaderLinkI[];
}

export type HeaderMenuItemsT = HeaderLinkI | HeaderDropdownItemsI;

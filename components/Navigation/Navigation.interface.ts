import { AnchorHTMLAttributes, ReactNode } from "react";

export interface NavItemProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  name: string;
  icon: ReactNode;
}

export interface NavListItemProps extends NavItemProps {
  isFirstItem: boolean;
  isLastItem: boolean;
  isSpecial: boolean;
}
export interface NavigationProps {
  items: NavItemProps[];
}

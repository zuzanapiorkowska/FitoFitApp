import { ReactNode } from "react";

export interface NavItemProps {
  name: string;
  href: string;
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

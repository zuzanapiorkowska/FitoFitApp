import classNames from "classnames";
import Link from "next/link";
import { NavListItemProps } from "./Navigation.interface";

export const NavigationItem = ({
  name,
  href,
  icon,
  isFirstItem,
  isLastItem,
  isSpecial,
  onClick,
}: NavListItemProps) => {
  return (
    <Link
      className={classNames(
        "text-white w-full h-5/6 flex items-center justify-center p-2 text-center",
        isSpecial
          ? "bg-violetExtraDark hover:bg-violetExtraDarkHover"
          : "bg-violetDark hover:bg-violetDarkHover",
        { "rounded-l-md": isFirstItem, "rounded-r-md": isLastItem }
      )}
      href={href}
      onClick={onClick}>
      <div className='h-6 w-6 pr-2 hidden md:inline' aria-hidden>
        {icon}
      </div>
      <span className='text-sm lg:text-md'>{name}</span>
    </Link>
  );
};

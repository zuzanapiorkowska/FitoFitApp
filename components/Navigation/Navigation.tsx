import React from "react";
import { NavigationProps } from "./Navigation.interface";
import { NavigationItem } from "./NavigationItem";

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav className='w-full h-full font-bold flex items-center justify-between gap-1 pl-8 text-md md:text-lg text-green-400'>
      {items.map((item, idx) => (
        <NavigationItem
          {...item}
          isFirstItem={idx === 0}
          isLastItem={idx === items.length - 1}
          isSpecial={item.name === "Add workout"}
          key={idx}
        />
      ))}
    </nav>
  );
};

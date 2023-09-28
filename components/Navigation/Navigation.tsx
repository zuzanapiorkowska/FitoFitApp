import React from "react";
import { useState } from "react";
import { BurgerMenuIcon } from "../icons/BurgerMenuIcon";
import { NavigationProps } from "./Navigation.interface";
import { NavigationItem } from "./NavigationItem";

export const Navigation = ({ items }: NavigationProps) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);
  return (
    <>
      <nav className='hidden xs:flex w-full h-full font-bold items-center justify-between gap-1 pl-8 text-md md:text-lg text-green-400'>
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
      <div className='flex flex-col xs:hidden items-end relative rounded-md w-full'>
        <button
          aria-label='open navigation'
          className='h-8 w-8 text-violetDark'
          onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}>
          <BurgerMenuIcon />
        </button>
        {isMobileNavVisible && (
          <div className='flex flex-col w-full absolute right-9 z-40 p-2 gap-1 rounded-md bg-white border-2 border-violetDark'>
            {items.map((item, idx) => (
              <NavigationItem
                {...item}
                isSpecial={item.name === "Add workout"}
                key={idx}
                onClick={() => setIsMobileNavVisible(false)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

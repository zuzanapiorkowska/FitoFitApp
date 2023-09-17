import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { navigationItems } from "../Navigation/utils";

export const Header = () => {
  return (
    <div className='flex w-full h-fit text-green-400 px-8 py-4'>
      <Link
        className='rounded-full bg-violetDark p-2 flex items-center h-fit min-w-fit justify-center'
        href='/'
        aria-label='Go to homepage'>
        <Image
          src='/logo.png'
          alt='logo'
          sizes='100vw'
          width='0'
          height='0'
          className='w-10 h-10 pt-1'
        />
      </Link>
      <Navigation items={navigationItems} />
    </div>
  );
};

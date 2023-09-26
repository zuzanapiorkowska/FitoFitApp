import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { navigationItems } from "../Navigation/utils";

export const Header = () => {
  return (
    <div className='flex w-full h-fit text-green-400 px-8 py-4 items-center gap-2 justify-between'>
      <Link href='/' aria-label='Go to homepage' className='flex items-center justify-center gap-2'>
        <div className='rounded-full bg-violetDark p-2 flex items-center h-fit min-w-fit justify-center'>
          <Image
            src='/logo.png'
            alt='logo'
            sizes='100vw'
            width='0'
            height='0'
            className='w-10 h-10 pt-1'
          />
        </div>
        <span className='font-bold text-violetDark text-lg'>FitoFit</span>
      </Link>
      <Navigation items={navigationItems} />
    </div>
  );
};

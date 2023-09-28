import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../Navigation/Navigation";
import { navigationItems } from "../Navigation/utils";

export const Header = () => {
  return (
    <div className='flex w-full h-fit px-8 py-4 items-center gap-2 justify-between text-green-400'>
      <Link href='/' aria-label='Go to homepage' className='flex items-center justify-center gap-2'>
        <div className='rounded-full p-2 flex items-center h-fit min-w-fit justify-center bg-violetDark'>
          <Image
            src='/logo.png'
            alt='logo'
            sizes='100vw'
            width='0'
            height='0'
            className='w-10 h-10 pt-1'
          />
        </div>
        <span className='font-bold text-lg text-violetDark'>FitoFit</span>
      </Link>
      <Navigation items={navigationItems} />
    </div>
  );
};

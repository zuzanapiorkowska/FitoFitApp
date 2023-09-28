import classNames from "classnames";
import Link from "next/link";
import { CarouselItemProps } from "./Carousel.interface";

export const Carouseltem = ({
  bgClassName,
  title,
  subtitle,
  linkText,
  href,
}: CarouselItemProps) => (
  <div
    className={classNames(
      "flex flex-col h-full w-full flex-carouselItem sm:flex-row p-16 md:px-28",
      "bg-carousel1 bg-cover position-center",
      bgClassName
    )}>
    <div className='w-full flex flex-col justify-center md:w-3/5 gap-8'>
      <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold'>{title}</h1>
      <p className='text-lg md:text-2xl'>{subtitle}</p>
    </div>
    <div className='flex items-end sm:items-center md:justify-center md:w-2/5 h-full'>
      <Link
        className={classNames(
          "py-4 px-8 rounded-lg text-center font-bold text-md md:text-lg mt-8 md:mt-0",
          "bg-violetExtraDark hover:bg-violetExtraDarkHover text-white border border-white"
        )}
        href={href}>
        {linkText}
      </Link>
    </div>
  </div>
);

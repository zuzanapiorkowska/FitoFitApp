import classNames from "classnames";
import React from "react";
import { CarouselButtonProps } from "./Carousel.interface";
import { NextArrowIcon } from "./icons/NextArrowIcon";
import { PrevArrowIcon } from "./icons/PrevArrowIcon";

export const CarouselButton = ({ onClick, type }: CarouselButtonProps) => {
  const isPrev = type === "prev";
  return (
    <button
      className={classNames(
        "absolute bg-white text-white rounded-full bg-opacity-40 h-8 w-8 md:h-10 md:w-10 z-10 top-1/2 transform -translate-y-1/2",
        { "left-4 md:left-8": isPrev, "right-4 md:right-8": !isPrev }
      )}
      onClick={() => onClick()}
      aria-label={isPrev ? "Show previous slide" : "Show next slide"}>
      {isPrev ? <PrevArrowIcon /> : <NextArrowIcon />}
    </button>
  );
};

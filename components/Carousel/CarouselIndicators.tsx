import classNames from "classnames";
import React from "react";
import { IndicatorsProps } from "./Carousel.interface";

export const CarouselIndicators = ({ scrollSnaps, selectedIdx, onClick }: IndicatorsProps) => {
  return (
    <ul className='absolute bottom-8 flex left-1/2 transform -translate-x-1/2 z-10 gap-2'>
      {scrollSnaps.map((_, idx) => {
        const isActive = idx === selectedIdx;
        return (
          <li className='flex' key={idx}>
            <button
              className={classNames("w-4 h-4 rounded-full", isActive ? "bg-white" : "bg-indicator")}
              aria-label={`Show ${idx + 1} slide of ${scrollSnaps.length}`}
              type='button'
              onClick={() => onClick(idx)}
            />
          </li>
        );
      })}
    </ul>
  );
};

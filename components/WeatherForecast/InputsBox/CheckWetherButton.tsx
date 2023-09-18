import React from "react";
import { NextArrowIcon } from "../../Carousel/icons/NextArrowIcon";
import { CheckWeatherButtonProps } from "../Weather.interface";

export const CheckWetherButton = () => {
  return (
    <button
      className='flex items-center justify-center bg-violetExtraDark hover:bg-violetExtraDarkHover w-full md:w-fit py-2 px-4 rounded-lg text-center whitespace-nowrap font-bold text-sm lg:text-md mt-8 md:mt-0 text-white border border-white'
      type='submit'>
      Check weather <span className='h-8 w-8'>{NextArrowIcon()}</span>
    </button>
  );
};

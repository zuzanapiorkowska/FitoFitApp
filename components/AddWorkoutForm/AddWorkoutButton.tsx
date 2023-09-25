import React from "react";
import { NextArrowIcon } from "../icons/NextArrowIcon";

export const AddWorkoutButton = () => {
  return (
    <button
      className='flex items-center justify-center bg-violetExtraDark hover:bg-violetExtraDarkHover w-full p-2 rounded-lg text-center font-bold text-xs text-white border border-white mt-2'
      type='submit'>
      Add workout <span className='h-4 w-4'>{NextArrowIcon()}</span>
    </button>
  );
};

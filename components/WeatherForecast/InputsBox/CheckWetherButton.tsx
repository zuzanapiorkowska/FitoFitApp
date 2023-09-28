import classNames from "classnames";
import { NextArrowIcon } from "../../icons/NextArrowIcon";

export const CheckWetherButton = () => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center w-full md:w-fit py-2 px-4 rounded-lg text-center whitespace-nowrap font-bold text-sm lg:text-md mt-8 md:mt-0",
        "bg-violetExtraDark hover:bg-violetExtraDarkHover text-white border border-white"
      )}
      type='submit'>
      Check weather <span className='h-8 w-8'>{NextArrowIcon()}</span>
    </button>
  );
};

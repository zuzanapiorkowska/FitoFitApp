import classNames from "classnames";
import { type } from "cypress/types/jquery";
import { NextArrowIcon } from "../icons/NextArrowIcon";

export const WorkoutFormButton = () => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center w-full p-2 rounded-lg text-center font-bold text-xs mt-2",
        "bg-violetExtraDark hover:bg-violetExtraDarkHover text-white border border-white "
      )}
      type='submit'>
      Add workout <span className='h-4 w-4'>{NextArrowIcon()}</span>
    </button>
  );
};

import classNames from "classnames";
import { InputField } from "./inputs/InputField";
import { useClickOutside } from "./hooks/useClickOutside";
import { WorkoutTypeSelectProps } from "./AddWorkoutForm.interface";
import { useRef } from "react";
import { inputClassName } from "../../utils/classNames";

export function WorkoutTypeSelect({
  disciplines,
  chosenDiscipline,
  setDiscipline,
  onButtonClick,
}: WorkoutTypeSelectProps) {
  const inputWrapperRef = useRef(null);
  const { isElementVisible: isDropdownVisible, setIsElementVisible: setIsDropdownVisible } =
    useClickOutside(inputWrapperRef);

  return (
    <InputField label='Choose workout type'>
      <div className='flex w-full'>
        <div className='relative w-full' ref={inputWrapperRef}>
          <input
            className={inputClassName}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            value={chosenDiscipline}
          />
          <div
            className={classNames(
              "bg-white z-40 w-full rounded-md border border-salmon text-pinkDark",
              isDropdownVisible ? "absolute top-9" : "hidden"
            )}>
            {disciplines.map(type => (
              <button
                aria-label={`add new ${type} workout`}
                type='button'
                className='p-2 hover:bg-pinkDark hover:bg-opacity-20 cursor-pointer block w-full text-left'
                onClick={() => {
                  setDiscipline(type);
                  setIsDropdownVisible(false);
                }}>
                {type}
              </button>
            ))}
          </div>
        </div>
        <button
          type='button'
          className='text-lg font-bold w-10'
          onClick={() => {
            onButtonClick();
            // setTimeout(() => {
            //   clearErrors();
            // }, 0);
          }}>
          +
        </button>
      </div>
    </InputField>
  );
}

import classNames from "classnames";
import { InputField } from "./inputs/InputField";
import { useClickOutside } from "./hooks/useClickOutside";
import { WorkoutTypeSelectProps } from "./WorkoutForm.interface";
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
    <InputField label='Choose workout type' htmlFor='workoutTypeSelect'>
      <div className='flex w-full'>
        <div className='relative w-full' ref={inputWrapperRef}>
          <input
            className={inputClassName}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            value={chosenDiscipline}
            id='workoutTypeSelect'
          />
          <div
            className={classNames(
              "z-40 w-full rounded-md border border-salmon text-pinkDark bg-white",
              isDropdownVisible ? "absolute top-9" : "hidden"
            )}>
            {disciplines.map(type => (
              <button
                type='button'
                className='p-2 cursor-pointer block w-full text-left hover:bg-pinkDark hover:bg-opacity-20'
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
          aria-label={`add new ${chosenDiscipline} workout`}
          onClick={onButtonClick}>
          +
        </button>
      </div>
    </InputField>
  );
}

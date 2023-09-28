import classNames from "classnames";
import { InputField } from "./inputs/InputField";
import { useClickOutside } from "./hooks/useClickOutside";
import { WorkoutTypeSelectProps } from "./WorkoutForm.interface";
import React, { useRef } from "react";
import { inputClassName } from "../../utils/classNames";
import { WorkoutType } from "../WorkoutsList/WorkoutsList.interface";

export function WorkoutTypeSelect({
  disciplines,
  chosenDiscipline,
  setDiscipline,
  onButtonClick,
}: WorkoutTypeSelectProps) {
  const inputWrapperRef = useRef(null);

  const { isElementVisible: isDropdownVisible, setIsElementVisible: setIsDropdownVisible } =
    useClickOutside(inputWrapperRef);

  const handleInputEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setIsDropdownVisible(true);
  };

  const handleOptionKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, type: WorkoutType) => {
    if (e.key === "Enter" || e.key === "") {
      setDiscipline(type);
      setIsDropdownVisible(false);
    }
  };

  const handleAddButtonPartEnterKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <InputField label='Choose workout type' htmlFor='workoutTypeSelect'>
      <div className='flex w-full'>
        <div className='relative w-full' ref={inputWrapperRef}>
          <input
            className={inputClassName}
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            onKeyDown={handleInputEnterKeyDown}
            value={chosenDiscipline}
            id='workoutTypeSelect'
            readOnly
          />
          <div
            className={classNames(
              "z-40 w-full rounded-md border border-salmon text-pinkDark bg-white",
              isDropdownVisible ? "absolute top-9" : "hidden"
            )}>
            {disciplines.map((type, idx) => (
              <button
                type='button'
                className='p-2 cursor-pointer block w-full text-left hover:bg-pinkDark hover:bg-opacity-20'
                onClick={() => {
                  setDiscipline(type);
                  setIsDropdownVisible(false);
                }}
                onKeyDown={e => handleOptionKeyDown(e, type)}
                key={idx}>
                {type}
              </button>
            ))}
          </div>
        </div>
        <button
          type='button'
          className='text-lg font-bold w-10'
          aria-label={`add new ${chosenDiscipline} workout`}
          onClick={onButtonClick}
          onKeyDown={handleAddButtonPartEnterKeyDown}>
          +
        </button>
      </div>
    </InputField>
  );
}

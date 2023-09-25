import classNames from "classnames";
import { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import { WorkoutType } from "../WorkoutsList/WorkoutsList.interface";
import { InputField } from "./InputField";
import { inputClassName } from "./utils";
import { createPortal } from "react-dom";
import { useClickOutside } from "./hooks/useClickOutside";

interface WorkoutTypeSelectProps {
  discipline: string;
  setDiscipline(string): void;
}

export function WorkoutTypeSelect({ discipline, setDiscipline }: WorkoutTypeSelectProps) {
  const inputWrapperRef = useRef(null);
  const { isElementVisible: isDropdownVisible, setIsElementVisible: setIsDropdownVisible } =
    useClickOutside(inputWrapperRef);

  return (
    <InputField label='Type'>
      <div className='relative' ref={inputWrapperRef}>
        <input
          className={inputClassName}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          value={discipline}
        />
        <div
          className={classNames(
            "bg-white z-40 w-full rounded-md border border-salmon text-pinkDark",
            isDropdownVisible ? "absolute top-9" : "hidden"
          )}>
          {Object.values(WorkoutType).map(type => (
            <button
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
    </InputField>
  );
}

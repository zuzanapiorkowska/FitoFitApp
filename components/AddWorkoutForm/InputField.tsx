import React, { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import { InputFieldProps } from "./AddWorkoutForm.interface";

export const InputField = ({
  htmlFor,
  label,
  errorMessage,
  children,
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <div className='flex flex-col text-xs gap-1'>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {!!errorMessage && (
        <p className='text-2xs text-red-700 bg-white bg-opacity-30 w-full rounded-sm px-1'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

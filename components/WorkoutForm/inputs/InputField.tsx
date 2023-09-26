import React, { PropsWithChildren } from "react";
import { InputFieldProps } from "../WorkoutForm.interface";

export const InputField = ({
  label,
  errorMessage,
  children,
  htmlFor,
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <div className='flex flex-col text-xs gap-1.5'>
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

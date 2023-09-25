import React from "react";

import { CoordinateInputProps } from "../Weather.interface";

export function CoordinateInput({ id, label, onChange, errorMessage }: CoordinateInputProps) {
  return (
    <div className='flex items-center gap-2'>
      <label className='text-violetExtraDark text-sm md:text-md font-bold' htmlFor={id}>
        {label}:
      </label>
      <div className='relative'>
        <input
          type='text'
          placeholder='0'
          className='px-2 py-1 w-32 rounded-md bg-white bg-opacity-50 text-pinkDark focus:outline focus:outline-2 focus:outline-main focus:ring-0 placeholder:text-salmonLight focus:ring-4 focus:ring-salmonLight'
          id={id}
          onChange={onChange}
        />
        {errorMessage && <p className='text-red-600 text-2xs absolute -bottom-5'>{errorMessage}</p>}
      </div>
    </div>
  );
}

import { inputClassName } from "../../../utils/classNames";

import { CoordinateInputProps } from "../Weather.interface";

export function CoordinateInput({ id, label, onChange, errorMessage }: CoordinateInputProps) {
  return (
    <div className='flex items-center gap-2'>
      <label className='text-sm md:text-md font-bold text-violetExtraDark' htmlFor={id}>
        {label}:
      </label>
      <div className='relative'>
        <input
          type='number'
          placeholder='0'
          className={inputClassName}
          id={id}
          onChange={onChange}
        />
        {errorMessage && <p className='text-2xs absolute -bottom-5 text-red-600'>{errorMessage}</p>}
      </div>
    </div>
  );
}

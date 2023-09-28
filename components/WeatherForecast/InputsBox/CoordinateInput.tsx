import { inputClassName } from "../../../utils/classNames";

import { CoordinateInputProps } from "../Weather.interface";

export function CoordinateInput({ id, label, onChange, errorMessage }: CoordinateInputProps) {
  return (
    <div className='flex items-center gap-2'>
      <label className='text-violetExtraDark text-sm md:text-md font-bold' htmlFor={id}>
        {label}:
      </label>
      <div className='relative'>
        <input type='text' placeholder='0' className={inputClassName} id={id} onChange={onChange} />
        {errorMessage && <p className='text-red-600 text-2xs absolute -bottom-5'>{errorMessage}</p>}
      </div>
    </div>
  );
}

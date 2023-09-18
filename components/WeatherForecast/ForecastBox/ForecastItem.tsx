import React from "react";
import { ForecastItemProps } from "../Weather.interface";

export const ForecastItem = ({ label, value, icon, unit, dataTest }: ForecastItemProps) => (
  <li className='flex flex-col items-center justify-center h-full'>
    <span className='text-violetExtraDark font-bold'>{label}:</span>
    <div className='bg-violetExtraDark bg-opacity-20 h-36 w-36 rounded-full flex flex-col items-center justify-center gap-1'>
      <div className='w-8 h-8'>{icon}</div>

      <p className='flex gap-1 items-end'>
        <span className='text-3xl font-bold' data-test={dataTest}>
          {value}
        </span>
        <span className='text-xl'>{unit}</span>
      </p>
    </div>
  </li>
);

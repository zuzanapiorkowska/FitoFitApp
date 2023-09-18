import React from "react";
import { ForecastListProps } from "../Weather.interface";
import { ForecastItemList } from "./ForecastItemList";

export default function ForecastBox({ weatherData }: ForecastListProps) {
  return (
    <div className='min-h-full md:min-h-fit h-fit w-full p-4 sm:p-8 mt-4 bg-opacity-20 bg-violetDark rounded-md flex flex-col items-center gap-4'>
      <div className='bg-white bg-opacity-20 rounded-md py-2 px-4 w-fit'>
        <p className='text-lg text-center'>Forecast for coordinates:</p>
        <p className='flex flex-col sm:flex-row sm:gap-8 text-center justify-center'>
          <span className='text-sm'>
            Lat:
            <span className='font-bold text-xl text-violetExtraDark pl-1'>
              {weatherData.coords.lat}
            </span>
          </span>
          <span className='text-sm'>
            Lon:
            <span className='font-bold text-xl text-violetExtraDark pl-1'>
              {weatherData.coords.lon}
            </span>
          </span>
        </p>
      </div>
      <ForecastItemList weatherData={weatherData} />
    </div>
  );
}

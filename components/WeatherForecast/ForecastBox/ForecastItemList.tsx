import React from "react";
import { HumidityIcon } from "../icons/HumidityIcon";
import { PressureIcon } from "../icons/PressureIcon";
import { TemperatureIcon } from "../icons/TemperatureIcon";
import { ForecastListProps } from "../Weather.interface";
import { ForecastItem } from "./ForecastItem";

export const ForecastItemList = ({ weatherData }: ForecastListProps) => {
  return (
    <ul className='flex flex-row flex-wrap h-full min-h-fit w-full gap-4 sm:gap-8 items-center justify-center'>
      <ForecastItem
        label='Temperture'
        value={weatherData.data.temp}
        icon={<TemperatureIcon />}
        unit='&#8451;'
        dataTest='temperature'
      />
      <ForecastItem
        label='Humidity'
        value={weatherData.data.humidity}
        icon={<HumidityIcon />}
        unit='%'
        dataTest='humidity'
      />
      <ForecastItem
        label='Pressure'
        value={weatherData.data.pressure}
        icon={<PressureIcon />}
        unit='hPa'
        dataTest='pressure'
      />
    </ul>
  );
};

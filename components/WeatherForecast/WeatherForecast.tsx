import React, { useState } from "react";
import ForecastBox from "./ForecastBox/ForecastBox";
import { InputsBox } from "./InputsBox/InputsBox";
import { DisplayedWeatherData } from "./Weather.interface";

export const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState<DisplayedWeatherData | undefined>(undefined);
  return (
    <div className='h-full w-full overflow-y-auto scrollbar scrollbar-thumb-pinkDark scrollbar-thin'>
      <InputsBox onCheckWeatherButtonClick={setWeatherData} />
      {weatherData && <ForecastBox weatherData={weatherData} />}
    </div>
  );
};

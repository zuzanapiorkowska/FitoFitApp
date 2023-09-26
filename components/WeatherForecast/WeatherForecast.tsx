import classNames from "classnames";
import React, { useState } from "react";
import { scrollbarClassName } from "../../utils/classNames";
import ForecastBox from "./ForecastBox/ForecastBox";
import { InputsBox } from "./InputsBox/InputsBox";
import { DisplayedWeatherData } from "./Weather.interface";

export const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState<DisplayedWeatherData | undefined>(undefined);
  return (
    <div className={classNames("h-full w-full pr-1", scrollbarClassName)}>
      <InputsBox onCheckWeatherButtonClick={setWeatherData} />
      {weatherData && <ForecastBox weatherData={weatherData} />}
    </div>
  );
};

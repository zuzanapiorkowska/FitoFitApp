import { HumidityIcon } from "../../icons/HumidityIcon";
import { PressureIcon } from "../../icons/PressureIcon";
import { TemperatureIcon } from "../../icons/TemperatureIcon";
import { ForecastItemsListProps, WeatherPart } from "../Weather.interface";
import { ForecastItem } from "./ForecastItem";

export const ForecastItemsList = ({ weatherData }: ForecastItemsListProps) => {
  return (
    <ul className='flex flex-row flex-wrap h-full min-h-fit w-full gap-4 sm:gap-8 items-center justify-center'>
      <ForecastItem
        label={WeatherPart.TEMPERATURE}
        value={weatherData.data.temp}
        icon={<TemperatureIcon />}
        unit='&#8451;'
        dataTest={WeatherPart.TEMPERATURE.toLowerCase()}
      />
      <ForecastItem
        label={WeatherPart.HUMIDITY}
        value={weatherData.data.humidity}
        icon={<HumidityIcon />}
        unit='%'
        dataTest={WeatherPart.HUMIDITY.toLowerCase()}
      />
      <ForecastItem
        label={WeatherPart.PRESSURE}
        value={weatherData.data.pressure}
        icon={<PressureIcon />}
        unit='hPa'
        dataTest={WeatherPart.PRESSURE.toLowerCase()}
      />
    </ul>
  );
};

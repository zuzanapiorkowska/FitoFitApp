import { ForecastBoxProps } from "../Weather.interface";
import { ForecastItemsList } from "./ForecastItemList";

export default function ForecastBox({ weatherData }: ForecastBoxProps) {
  const coordClassName = "font-bold text-xl pl-1 text-violetExtraDark";
  return (
    <div className='min-h-full md:min-h-fit h-fit w-full p-4 sm:p-8 mt-4 rounded-md flex flex-col items-center gap-4 bg-opacity-20 bg-violetDark'>
      <div className='rounded-md py-2 px-4 w-fit bg-white bg-opacity-20'>
        <p className='text-lg text-center'>Forecast for coordinates:</p>
        <p className='flex flex-col sm:flex-row sm:gap-8 text-center justify-center'>
          <span className='text-sm'>
            Lat:
            <span className={coordClassName}>{weatherData.coords.lat}</span>
          </span>
          <span className='text-sm'>
            Lon:
            <span className={coordClassName}>{weatherData.coords.lon}</span>
          </span>
        </p>
      </div>
      <ForecastItemsList weatherData={weatherData} />
    </div>
  );
}

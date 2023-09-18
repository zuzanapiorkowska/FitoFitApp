import axios from "axios";
import { OpenWeatherMapData } from "../DTO/OpenWeatherMapData.interface";
import { Coordinates } from "../Weather.interface";

export async function fetchWeatherData({ lat, lon }: Coordinates): Promise<OpenWeatherMapData> {
  // if (!process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY) {
  //   throw new Error("No OpenWeatherMap API key");
  // }
  // const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  const apiKey = "482a3ff2b48be084f28cff9a6d876094";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data: OpenWeatherMapData = response.data;
    return data;
  } catch {
    throw new Error("can't connect to https://api.openweathermap.org/...");
  }
}

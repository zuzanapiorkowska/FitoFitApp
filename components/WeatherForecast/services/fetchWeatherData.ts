import axios from "axios";
import { OpenWeatherMapData } from "../DTO/OpenWeatherMapData.interface";
import { Coordinates } from "../Weather.interface";

export async function fetchWeatherData({ lat, lon }: Coordinates): Promise<OpenWeatherMapData> {
  //env file was not added to .gitignore because:
  // 1. this (the only one in the project) env is exposed as part of the request url anyway
  // 2. I wanted the app to work properly after deploying it on github

  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data: OpenWeatherMapData = response.data;
    return data;
  } catch {
    throw new Error("can't connect to https://api.openweathermap.org/...");
  }
}

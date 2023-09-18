import { ClientWeatherData } from "../Weather.interface";
import { OpenWeatherMapData } from "./OpenWeatherMapData.interface";

export class WeatherDataAdapter {
  constructor(private openWeatherMapData: OpenWeatherMapData) {}

  getData(): ClientWeatherData {
    const clientWeatherData: ClientWeatherData = {
      temp: Math.round(this.openWeatherMapData.main.temp),
      humidity: Math.round(this.openWeatherMapData.main.humidity),
      pressure: Math.round(this.openWeatherMapData.main.pressure),
    };
    return clientWeatherData;
  }
}

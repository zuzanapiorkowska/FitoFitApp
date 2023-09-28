export interface WeatherInfo {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface OpenWeatherMapData {
  main: WeatherInfo;
}

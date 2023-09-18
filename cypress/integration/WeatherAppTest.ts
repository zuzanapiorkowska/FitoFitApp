///<reference types="cypress" />

import { WeatherPageObject } from "../support/WeatherPageObject.page-object";

describe("Weather App", () => {
  const page = new WeatherPageObject();

  beforeEach(() => page.mockWeatherData());

  it("shows data after choosing coords and clicking CheckWeatherButton", () => {
    // given

    page.openWeatherPage();

    // when
    const coordinates1 = { lat: "52", lon: "21" };

    // then
    page.enterDataToInputs(coordinates1.lat, coordinates1.lon);
    page.clickCheckWeather();
    page.displaysCurrentCoordinates(coordinates1.lat, coordinates1.lon);
    page.displaysTemperature();
    page.displaysHumidity();
    page.displaysPressure();
  });
});

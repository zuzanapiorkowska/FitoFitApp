export class WeatherPageObject {
  constructor() {}

  get nav() {
    return cy.get("nav");
  }
  get latInput() {
    return cy.get('input[id="latitude"]');
  }

  get lonInput() {
    return cy.get('input[id="longitude"]');
  }

  mockWeatherData() {
    cy.intercept("GET", "https://api.openweathermap.org/data/2.5/**", {
      fixture: "OpenWeatherMapData.json",
    });
  }

  openWeatherPage() {
    cy.visit("http://localhost:3000/weather");
  }

  enterDataToInputs(lat: string, lon: string): void {
    this.latInput.click({ force: true }).type(lat, { timeout: 8000 });
    this.lonInput.click({ force: true }).type(lon, { timeout: 8000 });
  }

  clearInputs(): void {
    this.latInput.clear();
    this.lonInput.clear();
  }

  clickCheckWeather(): void {
    cy.get('button:contains("Check weather")').click();
  }

  displaysCurrentCoordinates(lat: string, lon: string): void {
    cy.get('span:contains("Lat")').contains("span", lat);
    cy.get('span:contains("Lon")').contains("span", lon);
  }

  displaysTemperature(): void {
    cy.get('[data-test="pressure"]')
      .invoke("text")
      .should("match", /^[0-9\\-]*$/);
  }

  displaysHumidity(): void {
    cy.get('[data-test="humidity"]')
      .invoke("text")
      .should("match", /^[0-9]*$/);
  }

  displaysPressure(): void {
    cy.get('[data-test="pressure"]')
      .invoke("text")
      .should("match", /^[0-9]*$/);
  }
}

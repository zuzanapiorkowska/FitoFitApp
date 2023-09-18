import { ChangeEvent, HTMLAttributes, ReactNode } from "react";
export interface CoordinateInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  dataTest: string;
  errorMessage?: string;
  onChange(
    e: ChangeEvent<HTMLInputElement> & {
      target: HTMLInputElement;
    }
  ): void;
}

export type Coordinates = {
  lat: number;
  lon: number;
};

export interface DisplayedWeatherData {
  data: ClientWeatherData;
  coords: Coordinates;
}

export interface ClientWeatherData {
  temp: number;
  humidity: number;
  pressure: number;
}

export interface ForecastItemProps {
  label: string;
  dataTest: string;
  value: number;
  unit: string;
  icon: ReactNode;
}

export interface ForecastItemsListProps {
  items: ForecastItemProps;
}

export interface CheckWeatherButtonProps {
  coords: Coordinates;
}

export interface ForecastListProps {
  weatherData: DisplayedWeatherData;
}

export interface InputBoxProps {
  onCheckWeatherButtonClick(e: DisplayedWeatherData): void;
}

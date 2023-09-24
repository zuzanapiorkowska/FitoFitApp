import React, { useState } from "react";
import { PointerIcon } from "../../icons/PointerIcon";
import { Coordinates, InputBoxProps } from "../Weather.interface";
import { CheckWetherButton } from "./CheckWetherButton";
import { CoordinateInput } from "./CoordinateInput";
import { useForm } from "react-hook-form";
import { WeatherDataAdapter } from "../DTO/WeatherDataAdapter";
import { fetchWeatherData } from "../services/fetchWeatherData";

export const InputsBox = ({ onCheckWeatherButtonClick }: InputBoxProps) => {
  let [coords, setCoords] = useState<Coordinates>({ lat: 0, lon: 0 });

  type FormValues = Coordinates;

  const form = useForm<FormValues>({
    defaultValues: {
      lat: null,
      lon: null,
    },
  });
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const onSubmit = async (coords: Coordinates) => {
    console.log(coords);
    const data = await fetchWeatherData(coords);
    const adaptedData = new WeatherDataAdapter(data);
    console.log(adaptedData);
    onCheckWeatherButtonClick({ coords, data: adaptedData.getData() });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className='flex flex-col w-full md:flex-row lg:gap-8 bg-white bg-opacity-40 min-w-fit p-4 lg:p-8 rounded-md justify-between items-center'>
      <div className='flex items-center gap-4 flex-col sm:flex-row'>
        <div className='h-10 w-10'>
          <PointerIcon />
        </div>
        <div className='flex flex-col items-end md:items-center sm:flex-row gap-4'>
          <CoordinateInput
            id='latitude'
            label='Latitude'
            errorMessage={errors.lat && errors.lat.message}
            {...register("lat", {
              required: "Lat is required",
              min: {
                value: -90,
                message: "Min value: -90",
              },
              max: {
                value: 90,
                message: "Max value: 90",
              },
            })}
            onChange={e => {
              setCoords({ ...coords, lat: +e.target.value });
              setValue("lat", +e.target.value);
            }}
          />
          <CoordinateInput
            id='longitude'
            label='Longitude'
            errorMessage={errors.lon && errors.lon.message}
            {...register("lon", {
              required: "Lon is required",
              min: {
                value: -180,
                message: "Min value: -180",
              },
              max: {
                value: 180,
                message: "Max value: 180",
              },
            })}
            onChange={e => {
              setCoords({ ...coords, lon: +e.target.value });
              setValue("lon", +e.target.value);
            }}
          />
        </div>
      </div>
      <CheckWetherButton />
    </form>
  );
};

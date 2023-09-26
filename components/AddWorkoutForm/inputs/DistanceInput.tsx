import React from "react";
import { useFormContext } from "react-hook-form";
import { WorkoutType } from "../../WorkoutsList/WorkoutsList.interface";
import { inputClassName } from "../utils";
import { InputField } from "./InputField";

export interface DistanceInputProps {
  part: WorkoutType;
  idx: number;
}

export const DistanceInput = ({ part, idx }: DistanceInputProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <InputField
      label='Distance'
      errorMessage={errors.parts && errors.parts[idx] && errors.parts[idx].distanceInMeters.message}
      htmlFor={`distance-${part}`}>
      <input
        {...register(`parts.${idx}.distanceInMeters`, {
          required: "Distance is required",
        })}
        type='number'
        id={`distance-${part}`}
        className={inputClassName}
        placeholder='0'
      />
    </InputField>
  );
};
